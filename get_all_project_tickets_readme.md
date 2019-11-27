GET ALL PROJECT TICKETS

  SEND TO:
    '/api/tickets'
    
  METHOD:
    "GET"
    
  SEND AS BODY
  
    {
      projectId:#
    }
  
  
  SQL QUERIES
  
    All For One Project:
      SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`dueDate`,`tickets`.`createdAt`,`users`.`name` AS `assigneeName`,`priority`.`level` AS `priorityLevel`,`status`.`statusCode`,`types`.`type` AS `ticketType` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `types` ON `types`.`id` = `tickets`.`typeId` WHERE `tickets`.`projectId` = 1
      
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
         id:#, 
         ticketTitle:"",
         dueDate:"",
         createdAt:"",
         assigneeName:"",
         priorityLevel:"",
         statusCode:"",
         ticketType:""
        } 
       }
