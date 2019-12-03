<?php
if ($request['method'] === 'POST') {
/*   postSlack('#general','Super Duper', 'UR4ER5WVA');
  $response['body'] = 'success';
  send($response); */
  $userInfo = slackGetUserInfo('UR4ER5WVA');
  $response['body'] = $userInfo;
  send($response);
}
