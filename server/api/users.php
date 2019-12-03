<?php
    $link = get_db_link();

    if($request['method'] === 'POST') {
        error_log('hi');
        $body = getBodyInfoPost($request);
        $create = createUser($link, $body);
        $response['body'] = $create;
        send($response);
    }

    if ($request['method'] === 'GET') {
        $bodyData = getBodyInfoGET($request);
        if (isset($_GET['userId'])) {
          $data = getUserInfo($link, $_GET['userId']);
        } else {
          $data = getAllUsers($link, $bodyData);
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

    function getBodyInfoGET($request){
        $obj = [
          "userId" => ""
        ];
        if (isset($request['body']['userId'])) $obj['userId']= $request['body']['userId'];
        return $obj;
    }

    function getUserInfo($link, $bodyData){
      $user = $bodyData['userId'];
      $query = "SELECT `id`,`name`,`email`,`slackId` FROM `users` WHERE `id` = $user";
      $res = mysqli_query($link, $query);
      $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
      return $output;
    }

    function getAllUsers($link, $bodyData){
      $query = "SELECT `id`,`name`,`slackId` FROM `users`";
      $res = mysqli_query($link, $query);
      $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
      return $output;
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
