GET ALL PROJECT TICKETS FOR USER

  SEND TO:
    '/api/tickets?'

  METHOD:
    "GET"

  SEND AS PARAMETERS

      projectId:#,(used to get all tickets of that project)
      userId:#,(optional. Used to get all tickets of a project assigned to a user)
      ticketId#(optional. Used to get data on one ticket)

  SQL QUERIES

    All For One Project Of A User:
      SELECT `tickets`.`id`,`tickets`.`title` AS `ticketTitle`,`tickets`.`dueDate`,`tickets`.`createdAt`,`users`.`name` AS `assigneeName`,`priority`.`level` AS `priorityLevel`,`status`.`statusCode`,`types`.`type` AS `ticketType` FROM `tickets` INNER JOIN `users` ON `users`.`id` = `tickets`.`assigneeId` INNER JOIN `priority` ON `priority`.`id` = `tickets`.`priority` INNER JOIN `status` ON `status`.`id` = `tickets`.`statusCodeId` INNER JOIN `types` ON `types`.`id` = `tickets`.`typeId` WHERE `tickets`.`projectId` = 1 AND `tickets`.`assigneeId`=2



  RESPONSE:

    {
        id:#,
        ticketTitle:"",
        dueDate:"",
        createdAt:"",
        assigneeName:"",
        priorityLevel:"",
        statusCode:"",
        ticketType:""
    }
    OR IF A SINGLE TICKET
    {
        "id": #,
        "title": "",
        "description": "",
        "createdAt": "YYYY-MM-DD HH:MM:SS",
        "dueDate": "YYYY-MM-DD",
        "updateAt": "YYYY-MM-DD HH:MM:SS",
        "priorityLevel": "",
        "statusCode": "",
        "assigneeName": "",
        "fileUrl": ""
    }
