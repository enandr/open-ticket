<?php

session_start();

$request = [
  'method' => $_SERVER['REQUEST_METHOD'],
  'path' => parse_url($_SERVER['REQUEST_URI'])['path'],
  'headers' => getallheaders(),
  'query' => $_GET,
  'body' => json_decode(file_get_contents('php://input'), true) ?? []
];

$response = [
  'status' => 200,
  'headers' => [
    'Content-Type' => 'application/json; charset=utf-8'
  ]
];

function send($response) {
  http_response_code($response['status']);
  if (!array_key_exists('body', $response)) {
    unset($response['headers']['Content-Type']);
  }
  foreach ($response['headers'] as $key => $value) {
    header("$key: $value");
  }
  if (array_key_exists('body', $response)) {
    print(json_encode($response['body']));
  } else {
    print('');
  }
  exit;
}

function get_db_link() {
  require '_config.php';
  $host = $db_params['host'];
  $user = $db_params['user'];
  $pass = $db_params['pass'];
  $database = $db_params['database'];
  $link = mysqli_connect($host, $user, $pass, $database);
  if (!$link) {
    throw new ApiError('The API is temporarily down.', 503);
  }
  $link->set_charset('utf8');
  $link->options(MYSQLI_OPT_INT_AND_FLOAT_NATIVE, true);
  mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
  return $link;
}

class ApiError extends Error {}

set_exception_handler(function ($error) {
  if ($error instanceof ApiError) {
    $status = $error->getCode();
    $message = $error->getMessage();
  } else {
    error_log($error);
    $status = 500;
    $message = 'An unexpected error occurred.';
  }
  $response = [
    'status' => $status,
    'headers' => [
      'Content-Type' => 'application/json; charset=utf-8'
    ],
    'body' => [
      'error' => $message
    ]
  ];
  send($response);
});

register_shutdown_function(function () {
  if (headers_sent()) return;
  $response = [
    'status' => 500,
    'headers' => [
      'Content-Type' => 'application/json; charset=utf-8'
    ],
    'body' => [
      'error' => 'An unexpected error occurred.'
    ]
  ];
  send($response);
});
  function postSlack($channel,$message,$user)
    {
      require '_config.php';
      $url = "https://slack.com/api/chat.postMessage";
      $fields = [
        'token'      => $slack_token,
        'channel'    => $channel
      ];
      if (isset($user)) {
        $fields['text'] = "<@$user> " . $message;
      }
      else {
        $fields['text'] = $message;
      }
      $fields_string = http_build_query($fields);
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_POST, count($fields));
      curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      $result = curl_exec($ch);
      return $result;
}
  function slackGetUserInfo($user){
  require '_config.php';
  $url = "https://slack.com/api/users.info?token=$slack_token&user=$user&pretty=1";
  $ch = curl_init($url);
  $result = curl_exec($ch);
  return $result;
  }
