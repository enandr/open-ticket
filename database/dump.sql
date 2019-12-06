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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,1,'/images/spotify.png'),(2,2,'/images/spotify.png'),(3,3,'/images/spotify.png'),(4,4,'/images/spotify.png'),(5,5,'/images/spotify.png'),(6,6,'/images/spotify.png'),(7,7,'/images/spotify.png'),(8,8,'/images/spotify.png'),(9,9,'/images/spotify.png'),(10,10,'/images/spotify.png'),(11,11,'/images/spotify.png'),(12,12,'/images/spotify.png'),(13,13,'/images/spotify.png'),(14,14,'/images/spotify.png');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'SGT','A Student Grade Table to display a list of students, courses and their grades in that course.','2019-11-27 21:44:35',1),(2,'Wicked Sales','An ecommerce platform that sells some of the worst products tv has to offer.','2019-11-27 22:04:23',2),(3,'Memory Match','A Memory Match Card Game','2019-11-27 22:05:10',3),(4,'Open Ticket','An issue and feature tracking system for projects','2019-11-27 22:05:43',4),(5,'Hackathon','48 hour project usinf four separate Apis.','2019-12-04 01:01:16',2);
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tickets`
--

LOCK TABLES `tickets` WRITE;
/*!40000 ALTER TABLE `tickets` DISABLE KEYS */;
INSERT INTO `tickets` VALUES (1,'Cards Not Flipping','The cards are not flipping',NULL,3,1,1,1,2,'2019-11-27 22:19:44',1,'2019-11-27 22:19:44'),(2,'Average Grade Not Calculating','The average grade is not calculating correctly. It is too high.',NULL,1,2,1,1,4,'2019-11-27 22:19:44',2,'2019-11-27 22:19:44'),(3,'Checkout','Make the app have the ability to check out the users cart.',NULL,2,3,1,2,1,'2019-11-27 22:21:55',3,'2019-11-27 22:21:55'),(4,'View All Projects','Make it so the user can view all of their projects',NULL,4,4,1,2,3,'2019-11-27 22:22:41',4,'2019-11-27 22:22:41'),(5,'Edit a student','Make is so that a user can edit a student','2019-11-30',1,2,1,2,1,'2019-11-27 22:26:38',4,'2019-11-27 22:26:38'),(6,'Error viewing cart','The wrong data is showing up in the cart','2019-11-28',2,1,1,1,2,'2019-11-27 22:26:38',3,'2019-11-27 22:26:38'),(7,'Sound play when cards clicked','Make it so that sounds will play when cards are clicked','2019-11-21',3,4,1,2,3,'2019-11-27 22:28:40',2,'2019-11-27 22:28:40'),(8,'Planning','Plan for the whole project.','2019-12-06',5,1,2,2,2,'2019-12-04 01:02:56',2,'2019-12-04 01:02:56'),(9,'Break Into Component','Look over pieces of project and break down into components.','2019-12-07',5,1,1,1,2,'2019-12-04 01:04:33',2,'2019-12-04 01:04:33'),(10,'Finish the Project','Complete the project and turn into teacher.','2019-12-11',5,3,3,2,2,'2019-12-04 01:05:35',2,'2019-12-04 01:05:35'),(11,'Create Cards Dynamically','Create the cards using javascript and jQuery.','2019-12-06',3,2,2,1,2,'2019-12-04 01:07:40',2,'2019-12-04 01:07:40'),(12,'Change Image on Cards','Change the image on the cards to fit the theme.','2019-12-09',3,2,2,2,2,'2019-12-04 01:09:38',2,'2019-12-04 01:09:38'),(13,'Finish Back End','Finish PHP for the back end of Wicked Sales.','2019-12-05',2,2,2,2,2,'2019-12-04 01:10:59',2,'2019-12-04 01:10:59'),(14,'Create Detail View','Allow user to view products full details.','2019-12-13',2,1,1,2,2,'2019-12-04 01:12:00',2,'2019-12-04 01:12:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userProjects`
--

LOCK TABLES `userProjects` WRITE;
/*!40000 ALTER TABLE `userProjects` DISABLE KEYS */;
INSERT INTO `userProjects` VALUES (1,1,1),(2,4,1),(3,2,2),(4,3,2),(5,3,3),(6,4,3),(7,1,4),(8,5,2);
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
INSERT INTO `users` VALUES (1,'Roger','a@b.com','$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq','UR4ER5WVA'),(2,'Khoa','a@b.com','$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq','UR6F7NUM6'),(3,'Jacob','a@b.com','$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq','UQV1FDZ51'),(4,'Ziyaad','a@b.com','$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq','UQYH6HCHF');
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

-- Dump completed on 2019-12-06  0:01:10
