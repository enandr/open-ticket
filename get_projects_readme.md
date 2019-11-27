GET PROJECTS

  SEND TO:
    '/api/projects'
    
  METHOD:
    "GET"
    
  SEND AS BODY
  
    {
      projectId:# (only if getting one project's information. Else no body required)
    }
  
  
  SQL QUERIES
  
    Single Project:
      SELECT * FROM `projects` WHERE `id` = 1
    
    All Projects: (not recommended)
      SELECT * FROM `projects`
      
    All Projects Of One User:
      SELECT `userProjects`.`projectId`,`projects`.`title`, `projects`.`description`, `projects`.`createdAt`,`projects`.`createdBy` FROM `userProjects` INNER JOIN `projects` ON `projects`.`id` =`userProjects`.`projectId` WHERE `userId` = 1

  RESPONSE:
  
    {success: 
      (true/false), 
     message: 
      ("error message"/""), 
     data:
      {
         projectId:#,
         title:"",
         description:"",
         createdAt: "YYYY-MM-DD HH:MM:SS",
         createdBy: ""
        } 
       }
