<?php
    $link = get_db_link();
function postSlack($channel, $message)
{
  require '_config.php';
  if (isset($_GET['notify'])){
    if($_GET['notify'] === 'off'){
      return;
    }
  }
  $url = "https://slack.com/api/chat.postMessage";
  $fields = [
    'token'      => $slack_token,
    'channel'    => $channel,
    'text'       => $message
  ];
  $fields_string = http_build_query($fields);
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_POST, count($fields));
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  $result = curl_exec($ch);
  return $result;
}

function slackGetUserInfo($user)
{
  require '_config.php';
  $url = "https://slack.com/api/users.info?token=$slack_token&user=$user&pretty=1";
  $ch = curl_init($url);
  $result = curl_exec($ch);
  return $result;
}

function getSlackId($link,$user){
  $getSlackId = "SELECT `slackId` FROM `users` WHERE `id`=$user";
  $slackIdQuery = mysqli_query($link, $getSlackId);
  $slackId = mysqli_fetch_row($slackIdQuery);
  $slackId = $slackId[0];
  return $slackId;
}
