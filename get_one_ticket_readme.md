GET ONE TICKETS

  SEND TO:
    '/api/tickets'

  METHOD:
    "GET"

  SEND AS BODY

    {
      id:#
    }


  SQL QUERIES

    Get Single Ticket
      SELECT `tickets`.`id`, `tickets`.`title`, `tickets`.`description`, `tickets`.`createdAt`, `tickets`.`updateAt`, `tickets`.`dueDate`, `users`.`name` AS `assigneeName`, `priority`.`level` AS `priorityLevel`, `status`.`statusCode`, `files`.`fileUrl` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `files` ON `files`.`id` = `tickets`.`id` WHERE `tickets`.`id` = 1





  RESPONSE:

    {
      {
         title:"",
         description:"",
         dueDate:"YYYY-MM-DD",
         priority:"",
         assigneeName:"",
         fileUrl:""
      }
    }
