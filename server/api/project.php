<?php
    $link = get_db_link();

    if($request['method'] === 'POST') {
        $user = get_user();
        $body = getBodyInfoPost($request);
        $create = createProject($link, $body, $user);
        $linkUserToProject = linkUserToProject($link, $create, $user);
        $response['body'] = $create;
        send($response);
    }

    if ($request['method'] === 'GET') {
        $user = get_user();
        $data = getAllUsersProjects($link, $user);
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

    function getAllUsersProjects($link,$user){
        $query = "SELECT `userProjects`.`projectId`,`projects`.`title` AS `projectTitle`, `projects`.`description` FROM `userProjects` INNER JOIN `projects` ON `projects`.`id` =`userProjects`.`projectId` WHERE `userProjects`.`userId` = $user";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        return $output;
    }
    function getBodyInfoPost($request){

        if (!isset($request['body']['title'])) throw new ApiError("'title' not received", 400);
        if (!isset($request['body']['description'])) throw new ApiError("'description' not received", 400);

        return [
            'title' => $request['body']['title'],
            'description' => $request['body']['description']
        ];
    }

    function createProject($link, $bodyData, $user) {

        $sql = "INSERT INTO `projects` (`title`, `description`, `createdBy`)
                    VALUES (?, ?, ?)";
        $statement = mysqli_prepare($link, $sql);
        $title = $bodyData['title'];
        $description = $bodyData['description'];
        mysqli_stmt_bind_param($statement, 'ssi', $title, $description, $user);
        mysqli_stmt_execute($statement);
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
        postSlack('#general', "Has Created A New Project:
    Title: $title
    Description: $description", 'UR4ER5WVA');
            return $insertId;
        }
    }

    function linkUserToProject($link, $create, $user) {

        $sql = "INSERT INTO `userProjects` (`projectId`, `userId`) VALUES ($create, $user)";
        $respone = mysqli_query($link, $sql);
        $output = mysqli_fetch_all($respone, MYSQLI_ASSOC);

        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
            return $output;
        }

    }
?>
