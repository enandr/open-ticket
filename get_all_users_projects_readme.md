GET ALL USERS PROJECTS

  SEND TO:
    '/api/projects'

  METHOD:
    "GET"

  SEND AS BODY (no body required)

    {
    }


  SQL QUERIES

    All Projects Of One User:
      SELECT `userProjects`.`projectId`,`projects`.`title` AS `projectTitle`, `projects`.`description` FROM `userProjects` INNER JOIN `projects` ON `projects`.`id` =`userProjects`.`projectId` WHERE `userProjects`.`userId` = 1


  RESPONSE:

    {
      {
         projectId:#,
         projectTitle:"",
         description:""
      }
    }
