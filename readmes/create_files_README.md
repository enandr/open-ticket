CREATE FILES

  SEND TO:
    '/api/files'
    
  METHOD:
    "POST"
    
  SEND AS BODY
  
    {
      fileUrl: string
    }
  
  
  SQL QUERIES
    
    INSERT INTO `files` (`id`, `ticketId`, `fileUrl`) VALUES (NULL, '', 'url')
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
        filesUrl: string
       }
