<?php
    $link = get_db_link();

    if($request['method'] === 'GET') {
        $user = $_GET['name'];
        $password =$_GET['password'] ;
        $getHash = getHash($link, $user);
        $getUser = getUserInfos($link, $user, $password, $getHash);
        $response['body'] = $getUser;
        send($response);
    }

    function getHash($link, $user) {
        $query = "SELECT `password` FROM `users` WHERE `name` = '$user'";
        $res = mysqli_query($link, $query);
        $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
        $output = $output[0]['password'];
        if(empty($output)){
            unset($_SESSION['user_id']);
           return "Wrong Username";
        } else {
          return $output;
        }
    }

    function getUserInfos($link, $user, $password, $getHash) {
        if (password_verify($password, $getHash)) {
            unset($_SESSION['user_id']);
            $query = "SELECT `id` FROM `users` WHERE `name`= '$user'";
            $res = mysqli_query($link, $query);
            $output = mysqli_fetch_all($res, MYSQLI_ASSOC);
            $output = $output[0]['id'];
            error_log(print_r($output, true));

            if(empty($output)){
                throw new ApiError ("No user", 400);
            } else {
            $_SESSION['user_id'] = $output;
                return $output;
            }
        } else {
            unset($_SESSION['user_id']);
            return "Wrong Password";
        }
    }
?>
