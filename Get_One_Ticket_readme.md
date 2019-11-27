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
      SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`description`,`tickets`.`dueDate`,`tickets`.`createdAt`,`tickets`.`updateAt`, `projects`.`title` AS `projectTitle`,`priority`.`level` AS `priority`,`types`.`type`,`status`.`statusCode`,`assigneeName`.`name` AS `assigneeName`,`createdByName`.`name` AS `createdByName` FROM `tickets` INNER JOIN `projects` ON `tickets`.`projectId`=`projects`.`id` INNER JOIN `priority` ON `tickets`.`priority`=`priority`.`id` INNER JOIN `types` ON `tickets`.`typeId`=`types`.`id` INNER JOIN `status` ON `tickets`.`statusCodeId`=`status`.`id` INNER JOIN `users` AS `assigneeName` ON `tickets`.`createdBy`=`assigneeName`.`id` INNER JOIN `users` AS `createdByName` ON `tickets`.`assigneeId`=`createdByName`.`id` WHERE `tickets`.`id` = 1


    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
         id:#, 
         ticketTitle:"",
         description:"",
         dueDate:"",
         createdAt:"YYYY-MM-DD HH:MM:SS",
         updateAt:"",
         projectTitle:"",
         priority:"",
         type:"",
         statusCode:"",
         assigneeName:"",
         createdByName:""
        } 
       }
