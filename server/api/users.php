<?php
    $link = get_db_link();

    if($request['method'] === 'POST') {
        $body = getBodyInfoPost($request);
        $checkName = checkName($link,$body);
        $create = createUser($link, $body, $checkName);
        $response['body'] = $create;
        terminal_log($response);
        send($response);
    }

    if ($request['method'] === 'GET') {
        $bodyData = getBodyInfoGET($request);
        if (isset($_GET['userId'])) {
          $data = getUserInfo($link, $_GET['userId']);
        } else if (isset($_GET['projectId'])) {
          $data = getAllUsersOfProject($link, $bodyData);
        }else{
          $data = getAllUsers($link, $bodyData);
        }
        $response['body'] = $data;
        send($response);
    }
    function getAllUsersOfProject($link,$bodyData){
    $project = $bodyData['projectId'];
    $query = "SELECT `userProjects`.`userId`,`users`.name FROM `userProjects` JOIN `users` ON `users`.id = `userProjects`.`userId` WHERE `userProjects`.`projectId` = $project";
    $res = mysqli_query($link, $query);
    $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
    return $output;
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
          "userId" => "",
          "projectId"=>""
        ];
        if (isset($_GET['userId'])) $obj['userId']= $_GET['userId'];
        if (isset($_GET['projectId'])) $obj['projectId'] = $_GET['projectId'];
        return $obj;
    }
    function getUserInfo($link, $bodyData){
      $user = $bodyData['userId'];
      $query = "SELECT `id`,`name`,`email`,`slackId` FROM `users` WHERE `id` = $user";
      $res = mysqli_query($link, $query);
      $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
      $_SESSION['user_id'] = $user;
      if(empty($_SESSION['user_id'] )){
        throw new ApiError ("No user", 400);
      } else {
        return $output;
      }
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
        if (!isset($request['body']['slackId'])) throw new ApiError("'password' not received", 400);

        

        return [
            'name' => $request['body']['name'],
            'email' => $request['body']['email'],
            'password' => $request['body']['password'],
            'slackId' => $request['body']['slackId']
        ];
    }

    function checkName($link, $bodyData) {
      $sqlCheck = "SELECT `name` FROM `users` WHERE `name`='{$bodyData['name']}' ";
      $res = mysqli_query($link, $sqlCheck);
      $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
      $output = $output[0]['name'];
      return $output;
    }

    function createUser($link, $bodyData, $checkName) {
      if($checkName) {
        return "Already Exits";
      } else {
        $sql = "INSERT INTO `users` (`name`, `email`, `password`, `slackId`) VALUES (?,?,?,?)";
          $statement = mysqli_prepare($link, $sql);
          $name = $bodyData['name'];
          $email = $bodyData['email'];
          $slackId = $bodyData['slackId'];
          $pass = password_hash($bodyData['password'], PASSWORD_DEFAULT);
          mysqli_stmt_bind_param($statement, 'ssss', $name, $email, $pass,$slackId);
          mysqli_stmt_execute($statement);
          $insertId = $link->insert_id;

          if(empty($insertId)){
              throw new ApiError ("Fail to insert", 400);
          } else {
              return $insertId;
          }
      } 
    }
          
    if($request['method'] === 'PUT') {
      $getUpdate = getBodyUpdate($link, $request);
      $response['body'] = $getUpdate;
      send($response);
    }

    function getBodyUpdate($link, $request) {
      if (!isset($request['body']['userId'])) throw new ApiError("'userId' not received", 400);
      if (!isset($request['body']['slackId'])) throw new ApiError("'slackId' not received", 400);

     $userId = $request['body']['userId'];
     $slackId = $request['body']['slackId'];

     $updateSlack = "UPDATE `users` SET  `slackId`='$slackId' WHERE `id`=$userId";
     $res = mysqli_query($link, $updateSlack);
      $output = true;
      return $output;
    }

    
?>
