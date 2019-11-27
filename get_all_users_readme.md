GET ALL USERS

  SEND TO:
    '/api/projects'

  METHOD:
    "GET"

  SEND AS BODY (no body required)

    {
    }


  SQL QUERIES

    All Users:
      SELECT `id`,`name`,`email` FROM `users`


  RESPONSE:

    {
      {
         id:#,
         name:""
      }
    }
