<?php 
    if($request['method'] = 'GET') {
        unset($_SESSION['user_id']);
        $response['body'] = "signed out";
        send($response);
    }
?>