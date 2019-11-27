UPDATE TICKET

  SEND TO:
    '/api/tickets'
    
  METHOD:
    "PUT"
    
  SEND AS BODY (send all. if not updating, set value as null)
  
    {
      title:"",
      description:"",
      dueDate:"YYYY-MM-DD",
      priority:#,
      statusCodeId:#,
    }
  
  
  SQL QUERIES
  
    Update Ticket: (only send what needs to be updated. `updateAt` = CURRENT_TIMESTAMP required)
      UPDATE `tickets` SET `title` = '', `description` = '', `dueDate` = '', `priority` = '', `statusCodeId` = '', `updateAt` = CURRENT_TIMESTAMP WHERE `tickets`.`id` = 1
      
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/"")
    }
