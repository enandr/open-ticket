<?php
$link = get_db_link();

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
        if (!isset($request['body']['ticketId'])) {
            $obj['ticketId'] = "";
        } else {
            $obj['ticketId'] = $request['body']['ticketId'];
            return $obj;
        }
        if (!isset($request['body']['projectId'])){
            throw new ApiError("'projectId' not received", 400);
        }
        else {
            $obj['projectId'] = $request['body']['projectId'];
        }
        if (!isset($request['body']['userId'])){
            $obj['userId'] = "";
        }
        else {
            $obj['userId'] = $request['body']['userId'];
        }

        return $obj;

    }

    function getSingleTicket($link, $bodyData){
        $ticketId = $bodyData['ticketId'];
        $query = "SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`dueDate`,`tickets`.`createdAt`,`users`.`name` AS `assigneeName`,`priority`.`level` AS `priorityLevel`,`status`.`statusCode`,`types`.`type` AS `ticketType`,`files`.`fileUrl` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `types` ON `types`.`id` = `tickets`.`typeId` INNER JOIN `files` ON `files`.`id` = `tickets`.`id` WHERE `tickets`.`id`=$ticketId";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        return $output;
    }

    function getAllTicketsOfUserOfProject($link, $bodyData){
        $projectId = $bodyData['projectId'];
        $assigneeId = $bodyData['userId'];
        $query = "SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`dueDate`,`tickets`.`createdAt`,`users`.`name` AS `assigneeName`,`priority`.`level` AS `priorityLevel`,`status`.`statusCode`,`types`.`type` AS `ticketType` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `types` ON `types`.`id` = `tickets`.`typeId` WHERE `tickets`.`projectId` = $projectId AND `tickets`.`assigneeId`=$assigneeId";
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

        return [
            'title' => $request['body']['title'],
            'description' => $request['body']['description'],
            'dueDate' => $request['body']['dueDate'],
            'projectId' => $request['body']['projectId'],
            'priority' => $request['body']['priority'],
            'typeId' => $request['body']['typeId'],
            'assigneeId' => $request['body']['assigneeId']
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
            return $insertId;
        }
    }

    function createFile($link, $bodyData, $createTicket) {
        $sql = "INSERT INTO `files` (`ticketId`, `fileUrl`) VALUES (?, ?)";

        $statement = mysqli_prepare($link, $sql);
        $ticketId = $createTicket;
        $fileUrl = $bodyData['fileUrl'];

        mysqli_stmt_bind_param($statement, 'is', $ticketId, $fileUrl);
        mysqli_stmt_execute($statement);
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
            return $insertId;
        }
    }








?>
