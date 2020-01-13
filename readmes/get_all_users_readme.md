GET ALL USERS

  SEND TO:
    '/api/projects'

  METHOD:
    "GET"

  SEND AS PARAMETERS
  {
    projectId:#
  }

  SQL QUERIES

    All Users:
      SELECT `id`,`name`,`email` FROM `users`


  RESPONSE:

    [
      {
         id:#,
         name:""
      }
    ]
