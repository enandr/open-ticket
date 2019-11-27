<?php
    $link = get_db_link();

    if($request['method'] === 'POST') {
        error_log('hi');
        $body = getBodyInfoPost($request);
        $create = createUser($link, $body);
        $response['body'] = $create;
        send($response);
    }

    function getBodyInfoPost($request){
        
        if (!isset($request['body']['name'])) throw new ApiError("'name' not received", 400);
        if (!isset($request['body']['email'])) throw new ApiError("'email' not received", 400);
        if (!isset($request['body']['password'])) throw new ApiError("'password' not received", 400);
       
        return [
            'name' => $request['body']['name'],
            'email' => $request['body']['email'],
            'password' => $request['body']['password']
         ];
    }

    function createUser($link, $bodyData) {
         
        $sql = "INSERT INTO `users` (`name`, `email`, `password`) VALUES (?,?,?)";
        $statement = mysqli_prepare($link, $sql);
        $name = $bodyData['name'];
        $email = $bodyData['email'];
        $pass = $bodyData['password'];
        mysqli_stmt_bind_param($statement, 'sss', $name, $email, $pass);
        mysqli_stmt_execute($statement);    
        $insertId = $link->insert_id;

        if(empty($insertId)){
            throw new ApiError ("Fail to insert", 400);
        } else {
            return $insertId;
        }


    }
?>