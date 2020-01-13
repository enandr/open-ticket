CREATE TICKETS

  SEND TO:
    '/api/projects'
    
  METHOD:
    "POST"
    
  SEND AS BODY
  
    {
      title: string,
      description: text,
      users: []
    }
  
  
  SQL QUERIES
    
    INSERT INTO `projects` (`id`, `title`, `description`, `createdAt`, `createdBy`) VALUES (NULL, 'Front End', 'Java, JQuery, HTML, CSS not working together for some reason. ', CURRENT_TIMESTAMP, '1')
    
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
        createdBy: #,
        createdAt:YYYY-MM-DD hh:mm:ss,
        createdBy: #
       }
