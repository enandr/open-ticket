<?php
$link = get_db_link();

require 'slack.php';


    //UPDATE
    if($request['method'] === 'PUT') {
        $update = updateTicket($link, $request);
        $response['body'] = $update;
        send($response);
    }


    //GET
    if ($request['method'] === 'GET') {
        $bodyData = getBodyInfo($request);
        if (!empty($bodyData['ticketId'])){
            $data = getSingleTicket($link, $bodyData);
        }
        else if(!empty($bodyData['userId'])){

            $data = getAllTicketsOfUserOfProject($link, $bodyData);
        }
        else {
            $data = getAllTicketsOfProject($link, $bodyData);
        }
        $response['body'] = $data;
        send($response);
    }

    function get_user(){
        if (isset($_SESSION['user_id'])) {
            $userId  = $_SESSION['user_id'];
            return $userId;
        }
            throw new ApiError("No user exists", 404);
    }
    function getBodyInfo($request){
        $obj = [
            "ticketId"=>"",
            "projectId"=>"",
            "userId"=>""
        ];
        if (!isset($_GET['ticketId'])) {
            $obj['ticketId'] = "";
        } else {
            $obj['ticketId'] = $_GET['ticketId'];
            // return $obj;
        }
        if (!isset($_GET['projectId'])){
            throw new ApiError("'projectId' not received", 400);
        }
        else {
            $obj['projectId'] = $_GET['projectId'];
        }
        if (!isset($_GET['userId'])){
            $obj['userId'] = "";
        }
        else {
            $obj['userId'] = $_GET['userId'];
        }

        return $obj;

    }

    function getSingleTicket($link, $bodyData){
        $ticketId = $bodyData['ticketId'];
        $query = "  SELECT  `tickets`.`id` ,
                            `tickets`.`title` ,
                            `tickets`.`description` ,
                            `tickets`.`createdAt` ,
                            `tickets`.`dueDate` ,
                            `tickets`.`updateAt` ,
                            `priority`.`level` AS `priorityLevel` ,
                            `status`.`statusCode` ,
                            `users`.`name` AS `assigneeName`,
                            `files`.`fileUrl`
                    FROM `tickets`
                    INNER JOIN `priority`
                        ON `priority`.`id` = `tickets`.`priority`
                    INNER JOIN `status`
                        ON `status`.`id` = `tickets`.`statusCodeId`
                    INNER JOIN `users`
                        ON `users`.`id` = `tickets`.`assigneeId`
                    INNER JOIN `files`
                        ON `files`.`ticketId` = `tickets`.`id`
                    WHERE `tickets`.`id` = $ticketId";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        return $output;
    }

    function getAllTicketsOfUserOfProject($link, $bodyData){
        $projectId = $bodyData['projectId'];
        $assigneeId = $bodyData['userId'];
        $query =   "SELECT `ti`.`id`,
                            `ti`.`title` AS `ticketTitle`,
                            `ti`.`dueDate`,
                            `ti`.`createdAt`,
                            `u`.`name` AS `assigneeName`,
                            `p`.`level` AS `priorityLevel`,
                            `s`.`statusCode`,
                            `ty`.`type` AS `ticketType`
                    FROM `tickets` AS `ti`
        JOIN `users` AS `u`
            ON `u`.`id` = `ti`.`assigneeId`
        JOIN `priority` AS `p`
            ON `p`.`id` = `ti`.`priority`
        JOIN `status` AS `s`
            ON `s`.`id` = `ti`.`statusCodeId`
        JOIN `types` AS `ty`
            ON `ty`.`id` = `ti`.`typeId`
        WHERE `ti`.`projectId` = $projectId
            AND `ti`.`assigneeId`=$assigneeId";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res,MYSQLI_ASSOC);
        return $output;
    }

    function getAllTicketsOfProject($link, $bodyData){
        $projectId = $bodyData['projectId'];
        $query = "SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`dueDate`,`tickets`.`createdAt`,`users`.`name` AS `assigneeName`,`priority`.`level` AS `priorityLevel`,`status`.`statusCode`,`types`.`type` AS `ticketType` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `types` ON `types`.`id` = `tickets`.`typeId` WHERE `tickets`.`projectId` = $projectId";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        return $output;
    }

    //POST
    if ($request['method'] === 'POST') {
        require 'uploads.php';
        $body = getBodyInfoPost($request);
        $user = get_user();
        $createTicket = createTicket($link,$body,$user);
        $createFile = createFile($link, $body, $createTicket);
        $response['body'] = [
            "ticket" => $createTicket,
            "file" => $createFile
        ];
        send($response);
    }

    function getBodyInfoPost($request){

        if (!isset($request['body']['title'])) throw new ApiError("'title' not received", 400);
        if (!isset($request['body']['description'])) throw new ApiError("'description' not received", 400);
        if (!isset($request['body']['dueDate'])) throw new ApiError("'due date' not received", 400);
        if (!isset($request['body']['projectId'])) throw new ApiError("'projectId' not received", 400);
        if (!isset($request['body']['priority'])) throw new ApiError("'priority' not received", 400);
        if (!isset($request['body']['typeId'])) throw new ApiError("'typeId' not received", 400);
        if (!isset($request['body']['assigneeId'])) throw new ApiError("'assigneeId' not received", 400);
        if (!isset($request['body']['file'])) {
            $file = 'null';
        } else {
            $file = $request['body']['file'];
        }

        return [
            'title' => $request['body']['title'],
            'description' => $request['body']['description'],
            'dueDate' => $request['body']['dueDate'],
            'projectId' => $request['body']['projectId'],
            'priority' => $request['body']['priority'],
            'typeId' => $request['body']['typeId'],
            'assigneeId' => $request['body']['assigneeId'],
            'file' => $file
        ];
    }

    function createTicket($link, $bodyData, $user) {

        $sql = "INSERT INTO `tickets` (`title`, `description`, `dueDate`, `projectId`, `priority`,`typeId`, `assigneeId`,`createdBy`)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ";

        $statement = mysqli_prepare($link, $sql);
        $title = $bodyData['title'];
        $description = $bodyData['description'];
        $dueDate = $bodyData['dueDate'];
        $projectId = $bodyData['projectId'];
        $priority = $bodyData['priority'];
        $type = $bodyData['typeId'];
        $assignee = $bodyData['assigneeId'];

        mysqli_stmt_bind_param($statement, 'sssiiiii', $title, $description, $dueDate, $projectId, $priority, $type, $assignee, $user);
        mysqli_stmt_execute($statement);
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
        $creatorId = getSlackId($link, $user);
        $assigneeId = getSlackId($link, $assignee);
        postSlack('#general', "<@$creatorId> Has Created A New Ticket:
    Title: $title
    Description: $description
    Due Date: $dueDate
    ");
        postSlack($assigneeId,"<@$creatorId> has assigneed you to a new ticket. See it at http://localhost:3000/api/tickets?projectId=$projectId&ticketId=$insertId");
            return $insertId;
        }
    }

    function createFile($link, $bodyData, $createTicket) {
        $sql = "INSERT INTO `files` (`ticketId`, `fileUrl`) VALUES (?, ?)";

        $statement = mysqli_prepare($link, $sql);
        $ticketId = $createTicket;
/*         if(empty($bodyData['file'])){
            $fileUrl = "null";
        } else {
            $fileUrl = $bodyData['file'];
        } */

        mysqli_stmt_bind_param($statement, 'is', $ticketId, $bodyData['file']);
        mysqli_stmt_execute($statement);
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
            return $insertId;
        }
    }


    function updateTicket($link, $request) {

        if (!isset($request['body']['title'])) throw new ApiError("'title' not received", 400);
        if (!isset($request['body']['description'])) throw new ApiError("'description' not received", 400);
        if (!isset($request['body']['dueDate'])) throw new ApiError("'due date' not received", 400);
        if (!isset($request['body']['priority'])) throw new ApiError("'priority' not received", 400);
        if (!isset($request['body']['statusCodeId'])) throw new ApiError("'statusCodeId' not received", 400);
        if (!isset($request['body']['ticketId'])) throw new ApiError("'ticketId' not received", 400);
        //if (!isset($request['body']['assigneeId'])) throw new ApiError("'assigneeId' not received", 400);

        $dueDate = $request['body']['dueDate'];
        $valueDescription = $request['body']['description'];
        $valueTitle = $request['body']['title'];
        $priority = $request['body']['priority'];
        $status = $request['body']['statusCodeId'];
        $ticketId = $request['body']['ticketId'];



        $updateQuery = "UPDATE `tickets` SET `dueDate`='$dueDate', `description`='$valueDescription', `title`='$valueTitle', `priority`='$priority', `statusCodeId`='$status' WHERE `id`=$ticketId";
        $res = mysqli_query($link, $updateQuery);
        $output = true;
        return $output;
    }





?>
