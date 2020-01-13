

CREATE FILES

  SEND TO:
    '/api/userProjects'
    
  METHOD:
    "POST"
    
  SEND AS BODY
  
    {
      projectId: #,
      userID:#
    }
  
  
  SQL QUERIES
    
    INSERT INTO `userProjects` (`id`, `projectId`, `userId`) VALUES (NULL, '1', '2')
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
       
       }
