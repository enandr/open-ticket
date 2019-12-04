GET ALL PROJECT TICKETS

  SEND TO:
    '/api/tickets?'

  METHOD:
    "GET"

  SEND AS PARAMETERS

    'userId=#' (if specifying a user. Else, DONT SEND. Session id will be used)


  SQL QUERIES

    All For One Project:
      SELECT `userProjects`.`projectId`,`projects`.`title` AS `projectTitle`, `projects`.`description` FROM `userProjects` INNER JOIN `projects` ON `projects`.`id` =`userProjects`.`projectId` WHERE `userProjects`.`userId` = $user


  RESPONSE:

    {
      {
         projectId:#,
         projectTitle:"",
         description:""
      }
    }
