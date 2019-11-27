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
      SELECT `tickets`.`title`,`tickets`.`description`,`tickets`.`dueDate`,`priority`.`level` AS `priority`,`users`.`name` AS `assigneeName`,`files`.`fileUrl` FROM `tickets` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `files` ON `files`.`id` = `tickets`.`id` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId`



    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
         title:"",
         description:"",
         dueDate:"YYYY-MM-DD",
         priority:"",
         assigneeName:"",
         fileUrl:""
        } 
       }
