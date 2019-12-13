<?php

require_once '../api/_lifecycle.php';

switch ($request['path']) {
  case '/api/health-check':
  case '/api/tickets':
  case '/api/users':
  case '/api/project':
  case '/api/slack':
  case '/api/login':
  case '/api/uploads':
  case '/api/logout':
  case '/api/account':
    require_once "..${request['path']}.php";
  default:
    throw new ApiError("Cannot ${request['method']} ${request['path']}", 404);
}
