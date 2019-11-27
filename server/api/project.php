<?php
    $link = get_db_link();

    if($request['method'] === 'POST') {
        $user = get_user();
        $body = getBodyInfoPost($request);
        $create = createUser($link, $body);
    }

    function get_user(){
        if (isset($_SESSION['user_id'])) {
            $userId  = $_SESSION['user_id'];
            return $userId;
        }
            throw new ApiError("No user exists", 404);
    }


    function getBodyInfoPost($request){
        
        if (!isset($request['body']['title'])) throw new ApiError("'title' not received", 400);
        if (!isset($request['body']['description'])) throw new ApiError("'description' not received", 400);
       
    
        return [
            'title' => $request['body']['title'],
            'description' => $request['body']['description']
        ];
    }

    function createUser($link, $bodyData) {
        
        $sql = "INSERT INTO `projects` (`title`, `description`, `createdBy`) 
                    VALUES (?, ?, ?)";
        $statement = mysqli_prepare($link, $sql);
        $title = $bodyData['name'];
        $description = $bodyData['description'];
        mysqli_stmt_bind_param($statement, 'ssi', $title, $description,);
        mysqli_stmt_execute($statement);    
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
            return $insertId;
        }


?>