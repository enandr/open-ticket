-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: openTicket
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ticketId` int(11) NOT NULL,
  `fileUrl` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,1,'/images/.'),(2,2,'/images/.'),(3,3,'/images/.'),(4,4,'/images/.'),(5,5,'/images/.'),(6,6,'/images/.'),(7,7,'/images/.'),(8,8,'/images/.'),(9,9,'/images/.'),(10,10,'/images/.'),(11,11,'/images/0cb04f8a6192b7167c0795dda7c9535b.jpg'),(12,12,'/images/101e8791e568bbe40609f9d2595f8c3c.jpg'),(13,13,'/images/78234d87c35380beba8249edceee5442.jpg'),(14,14,'/images/.'),(15,15,'/images/.'),(16,16,'/images/.'),(17,17,'/images/.'),(18,18,'/images/.'),(19,19,'/images/.'),(20,20,'/images/.'),(21,21,'/images/.'),(22,22,'/images/.');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `priority`
--

DROP TABLE IF EXISTS `priority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `priority` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `priority`
--

LOCK TABLES `priority` WRITE;
/*!40000 ALTER TABLE `priority` DISABLE KEYS */;
INSERT INTO `priority` VALUES (1,'Urgent'),(2,'High'),(3,'Medium'),(4,'Low');
/*!40000 ALTER TABLE `priority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Student Grade Table','An app to display a list of students courses, and their grades','2019-12-09 23:50:48',1),(2,'Star Wars Memory Match','A card memory match game with a Star Wars Theme','2019-12-09 23:52:18',1),(3,'Stay In Go Out','SI/GO is an app that, based on the weather, recommends indoor or outdoor activities.','2019-12-09 23:55:48',1),(4,'Terraforming Mars','A digitalized board game where you terraform mars to make it livable','2019-12-09 23:57:32',1),(5,'Events Near You','A simple project implementing EventBrite API to find and displays events nearby the user.','2019-12-09 23:58:32',3),(6,'Xbox GamePass','Xbox Game Pass is a video game subscription service for use with the Xbox One console and Windows 10. ','2019-12-09 23:59:44',4),(7,'Overwatch Memory Match','Match your favorite Overwatch characters in this game based on Blizzard’s hit first person shooter.','2019-12-10 00:00:13',4),(8,'Gemstone Mining','A re-creation of the Disney Gemstone Mining game written in Javascript OOP.','2019-12-10 00:00:49',3),(10,'Balance Health','Tracking what you did what you eat and how long you sleep to give you the recommendation.','2019-12-10 00:01:55',2),(11,'Travel buddy','Let you know the weather in the area and the top 5 restaurant in that area.','2019-12-10 00:02:28',2),(12,'openTicket','A React based issue and feature tracking system for web development projects. Built for developers by developers. word word.','2019-12-10 00:07:19',4),(15,'Memory Match','A themed, javascript memory match game that tracks player statistics.','2019-12-10 00:26:23',3);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `statusCode` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Open'),(2,'In-Progress'),(3,'Closed');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tickets`
--

DROP TABLE IF EXISTS `tickets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dueDate` date DEFAULT NULL,
  `projectId` int(11) NOT NULL,
  `priority` int(11) NOT NULL,
  `statusCodeId` int(11) NOT NULL DEFAULT '1',
  `typeId` int(11) NOT NULL,
  `assigneeId` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` int(11) NOT NULL,
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'Create Cards Dynamically','Allow the cards to be created dynamically using jQuery.','2019-12-09',15,4,2,2,3,'2019-12-10 00:32:16',3,'2019-12-10 00:32:16'),(2,'Randomize Cards','Take the array of cards and randomize them at the start of each match.','2019-12-21',15,3,1,2,3,'2019-12-10 00:35:32',3,'2019-12-10 00:35:32'),(3,'Finish MVP','Finish the basic functionality of the application. Statistics, cards, game board, etc.','2019-12-07',15,2,3,2,3,'2019-12-10 00:37:23',3,'2019-12-10 00:37:23'),(4,'Basic CSS - Front End','Complete the basic styling of the app, including a theme.','2019-12-07',15,3,3,2,3,'2019-12-10 00:38:30',3,'2019-12-10 00:38:30'),(5,'Add Card Flip Transitions','Allow the cards to flip over, revealing the card face.','2019-12-11',15,4,2,1,3,'2019-12-10 00:39:34',3,'2019-12-10 00:39:34'),(6,'Clicking Same Card Twice','Selecting the same card twice will count as a match within the game.','2019-12-20',15,4,1,1,3,'2019-12-10 00:42:11',3,'2019-12-10 00:42:11'),(7,'Add Red Dead Redemption 2','Add Red Dead Redemption 2 to available Game Pass catalog, test with QA, and then merge to production.','2020-10-10',6,3,1,2,4,'2019-12-10 00:57:26',4,'2019-12-10 00:57:26'),(8,'Halo: MCC Crossplay','Add crossplay for Halo: Master Chief Collection for Xbox One and PC players to play regardless of system.','2019-12-12',6,1,1,2,4,'2019-12-10 01:00:14',4,'2019-12-10 01:00:14'),(9,'Dashboard crashes','Dashboard crashes when accessing multiple menus from within Xbox menu and running a CPU intensive game.','2020-02-05',6,4,1,1,4,'2019-12-10 01:01:53',4,'2019-12-10 01:01:53'),(10,'Add Bioshock to GamePass','Add Bioshock Collection to GamePass back catalog. Test with QA, and merge to production.','2019-01-05',6,4,3,2,4,'2019-12-10 01:03:20',4,'2019-12-10 01:03:20'),(11,'Convert Live to GamePass Ult','Convert existing accounts from regular Live enabled to GamePass Unlimited.','2020-10-10',6,4,2,1,4,'2019-12-10 01:06:58',4,'2019-12-10 01:06:58'),(12,'Different response from API','API did not send the same response for each request. ','2019-12-21',11,3,1,1,2,'2019-12-10 01:25:12',2,'2019-12-10 01:25:12'),(13,'Yelp API missing key','don\'t have a key for Yelp API. ','2019-12-15',11,2,1,1,2,'2019-12-10 01:26:52',2,'2019-12-10 01:26:52'),(14,'header for Yelp API','Don\'t know how to build a header for Yelp API.','2019-12-16',11,3,1,1,2,'2019-12-10 01:28:40',2,'2019-12-10 01:28:40'),(15,'Error when get the data ','Get the wrong data with the API and error from the server-side.','2019-12-17',11,1,1,1,2,'2019-12-10 01:29:58',2,'2019-12-10 01:29:58'),(16,'Boostrap Problems','The boostrap mess up with CSS, and not responsive','2019-12-18',11,1,1,1,2,'2019-12-10 01:32:24',2,'2019-12-10 01:32:24'),(17,'Calculate the sleeping time','Add feature to calculate and compare with what you eat. ','2019-12-22',10,3,1,2,2,'2019-12-10 01:34:46',2,'2019-12-10 01:34:46'),(18,'Don\'t get infos from users','Don\'t have input from users. Tester report problem.','2019-12-27',10,3,1,1,2,'2019-12-10 01:36:42',2,'2019-12-10 01:36:42'),(19,'Don\'t have any recommendation ','Need to update recommendations for users.  ','2019-12-30',10,1,1,2,2,'2019-12-10 01:37:48',2,'2019-12-10 01:37:48'),(20,'Display Weather','Display the users weather from their location','2019-12-16',3,2,1,2,1,'2019-12-10 01:43:55',1,'2019-12-10 01:43:55'),(21,'Display Movies','Display a list of movies based on the category choice','2019-12-15',3,3,1,2,1,'2019-12-10 01:44:31',1,'2019-12-10 01:44:31'),(22,'Make pins are not clickable','The pins on the map are not clickable. They do not go directly to the attached activity','2019-12-28',3,3,1,1,1,'2019-12-10 01:46:07',1,'2019-12-10 01:46:07');
/*!40000 ALTER TABLE `tickets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `types`
--

DROP TABLE IF EXISTS `types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'Issue'),(2,'Feature'),(3,'Project');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userProjects`
--

DROP TABLE IF EXISTS `userProjects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userProjects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userProjects`
--

LOCK TABLES `userProjects` WRITE;
/*!40000 ALTER TABLE `userProjects` DISABLE KEYS */;
INSERT INTO `userProjects` VALUES (1,1,1),(2,2,1),(3,3,1),(4,3,2),(5,3,3),(6,3,4),(7,4,1),(8,4,3),(9,4,2),(10,4,4),(11,5,3),(12,5,1),(13,5,2),(14,5,4),(15,6,4),(16,6,1),(17,6,2),(18,6,3),(19,7,4),(20,8,3),(21,8,2),(22,8,1),(23,8,4),(26,9,1),(27,9,4),(28,10,2),(29,11,2),(30,12,4),(31,12,2),(32,12,1),(33,12,3),(39,15,3);
/*!40000 ALTER TABLE `userProjects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slackId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'roger','a@b.com','$2y$10$.Ywd5zUhyxWPu6yBij4XG.MeW7q/iUK6DbMjfoE2PqQ1l1T2271nK','UR4ER5WVA'),(2,'khoa','a@b.com','$2y$10$t4qjs..RhVOL/FY8p7ZOFeKBSDqER25AD4Ilar3PZnmE1k1OZBEly','UR6F7NUM6'),(3,'jake','a@b.com','$2y$10$KILR.RH95awv.K8ZnOvbE.9HYC7WFqw3qvMS6lG89icZxvgxd6S5W','UQV1FDZ51'),(4,'ziyaad','a@b.com','$2y$10$6VjCVzQqbvbTckZZ/t12DueajO7/6dPSn2biMwsVPV7IYABFe6.ai','UQYH6HCHF');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-10  1:46:53
