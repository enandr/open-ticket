CREATE TICKETS

  SEND TO:
    '/api/users'
    
  METHOD:
    "POST"
    
  SEND AS BODY
  
    {
      name: string,
      email: string,
      password: string
    }
  
  
  SQL QUERIES
    
   INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES (NULL, 'jacob', 'jacob@email.com', 'jacob')
    
  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
        
       }
