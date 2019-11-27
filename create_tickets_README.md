CREATE TICKETS

  SEND TO:
    '/api/tickets'
    
  METHOD:
    "POST"
    
  SEND AS BODY
  
    {
      title: string,
      description: text,
      dueDate: YYYY-MM-DD,
      projectId: #,
      priority: #,
      statusCodeId: #,
      typeId: #,
      assigneeId: #,
      createdBy: #
    }
  
  
  SQL QUERIES
    
    INSERT INTO `tickets` (`id`, `title`, `description`, `dueDate`, `projectId`, `priority`, `statusCodeId`, `typeId`, `assigneeId`, `createdAt`, `createdBy`, `updateAt`) VALUES (NULL, 'bug found', '13214646asdasdasdas', '2019-11-27', '1', '1', '1', '1', '2', CURRENT_TIMESTAMP, '1', CURRENT_TIMESTAMP):
     
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
        id:#, 
        title: string,
        description: text,
        dueDate: YYYY-MM-DD,
        projectId: #,
        priority: #,
        statusCodeId: #,
        typeId: #,
        assigneeId: #,
        createdAt:YYYY-MM-DD hh:mm:ss,
        createdBy: #,
        updateAt:YYYY-MM-DD hh:mm:ss 
        } 
       }
