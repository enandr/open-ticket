<?php
$link = get_db_link();

    //GET
    if ($request['method'] === 'GET') {
        $bodyData = getBodyInfo($request);
        if(!empty($bodyData['userId'])){
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
            projectId=>"",
            userId=>""
        ];
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
    



    

    


?>