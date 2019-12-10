-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 04, 2019 at 10:25 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `openTicket`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `ticketId` int(11) NOT NULL,
  `fileUrl` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `ticketId`, `fileUrl`) VALUES
(1, 1, 'null'),
(2, 2, 'null'),
(3, 3, 'null'),
(4, 4, 'null'),
(5, 5, 'null'),
(6, 6, 'null'),
(7, 7, 'null'),
(8, 8, 'null'),
(9, 9, 'null'),
(10, 10, 'null'),
(11, 11, 'null'),
(12, 12, 'null'),
(13, 13, 'null'),
(14, 14, 'null');

-- --------------------------------------------------------

--
-- Table structure for table `priority`
--

CREATE TABLE `priority` (
  `id` int(11) NOT NULL,
  `level` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `priority`
--

INSERT INTO `priority` (`id`, `level`) VALUES
(1, 'Urgent'),
(2, 'High'),
(3, 'Medium'),
(4, 'Low');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `description`, `createdAt`, `createdBy`) VALUES
(1, 'SGT', 'A Student Grade Table to display a list of students, courses and their grades in that course.', '2019-11-27 21:44:35', 1),
(2, 'Wicked Sales', 'An ecommerce platform that sells some of the worst products tv has to offer.', '2019-11-27 22:04:23', 2),
(3, 'Memory Match', 'A Memory Match Card Game', '2019-11-27 22:05:10', 3),
(4, 'Open Ticket', 'An issue and feature tracking system for projects', '2019-11-27 22:05:43', 4),
(5, 'Hackathon', '48 hour project usinf four separate Apis.', '2019-12-04 01:01:16', 2);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `statusCode` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `statusCode`) VALUES
(1, 'Open'),
(2, 'In-Progress'),
(3, 'Closed');

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
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
  `updateAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tickets`
--

INSERT INTO `tickets` (`id`, `title`, `description`, `dueDate`, `projectId`, `priority`, `statusCodeId`, `typeId`, `assigneeId`, `createdAt`, `createdBy`, `updateAt`) VALUES
(1, 'Cards Not Flipping', 'The cards are not flipping', NULL, 3, 1, 1, 1, 2, '2019-11-27 22:19:44', 1, '2019-11-27 22:19:44'),
(2, 'Average Grade Not Calculating', 'The average grade is not calculating correctly. It is too high.', NULL, 1, 2, 1, 1, 4, '2019-11-27 22:19:44', 2, '2019-11-27 22:19:44'),
(3, 'Checkout', 'Make the app have the ability to check out the users cart.', NULL, 2, 3, 1, 2, 1, '2019-11-27 22:21:55', 3, '2019-11-27 22:21:55'),
(4, 'View All Projects', 'Make it so the user can view all of their projects', NULL, 4, 4, 1, 2, 3, '2019-11-27 22:22:41', 4, '2019-11-27 22:22:41'),
(5, 'Edit a student', 'Make is so that a user can edit a student', '2019-11-30', 1, 2, 1, 2, 1, '2019-11-27 22:26:38', 4, '2019-11-27 22:26:38'),
(6, 'Error viewing cart', 'The wrong data is showing up in the cart', '2019-11-28', 2, 1, 1, 1, 2, '2019-11-27 22:26:38', 3, '2019-11-27 22:26:38'),
(7, 'Sound play when cards clicked', 'Make it so that sounds will play when cards are clicked', '2019-11-21', 3, 4, 1, 2, 3, '2019-11-27 22:28:40', 2, '2019-11-27 22:28:40'),
(8, 'Planning', 'Plan for the whole project.', '2019-12-06', 5, 1, 2, 2, 2, '2019-12-04 01:02:56', 2, '2019-12-04 01:02:56'),
(9, 'Break Into Component', 'Look over pieces of project and break down into components.', '2019-12-07', 5, 1, 1, 1, 2, '2019-12-04 01:04:33', 2, '2019-12-04 01:04:33'),
(10, 'Finish the Project', 'Complete the project and turn into teacher.', '2019-12-11', 5, 3, 3, 2, 2, '2019-12-04 01:05:35', 2, '2019-12-04 01:05:35'),
(11, 'Create Cards Dynamically', 'Create the cards using javascript and jQuery.', '2019-12-06', 3, 2, 2, 1, 2, '2019-12-04 01:07:40', 2, '2019-12-04 01:07:40'),
(12, 'Change Image on Cards', 'Change the image on the cards to fit the theme.', '2019-12-09', 3, 2, 2, 2, 2, '2019-12-04 01:09:38', 2, '2019-12-04 01:09:38'),
(13, 'Finish Back End', 'Finish PHP for the back end of Wicked Sales.', '2019-12-05', 2, 2, 2, 2, 2, '2019-12-04 01:10:59', 2, '2019-12-04 01:10:59'),
(14, 'Create Detail View', 'Allow user to view products full details.', '2019-12-13', 2, 1, 1, 2, 2, '2019-12-04 01:12:00', 2, '2019-12-04 01:12:00');

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `type` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `type`) VALUES
(1, 'Issue'),
(2, 'Feature'),
(3, 'Project');

-- --------------------------------------------------------

--
-- Table structure for table `userProjects`
--

CREATE TABLE `userProjects` (
  `id` int(11) NOT NULL,
  `projectId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `userProjects`
--

INSERT INTO `userProjects` (`id`, `projectId`, `userId`) VALUES
(1, 1, 1),
(2, 4, 1),
(3, 2, 2),
(4, 3, 2),
(5, 3, 3),
(6, 4, 3),
(7, 1, 4),
(8, 5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slackId` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `slackId`) VALUES
(1, 'Roger', 'a@b.com', '$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq', 'UR4ER5WVA'),
(2, 'Khoa', 'a@b.com', '$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq', 'UR6F7NUM6'),
(3, 'Jacob', 'a@b.com', '$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq', 'UQV1FDZ51'),
(4, 'Ziyaad', 'a@b.com', '$2y$10$RYFLAsrs5uG9w9QyPs6PhOeQ8abPCZMyQ4SdWt63OGhd43kMvWuuq', 'UQYH6HCHF');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userProjects`
--
ALTER TABLE `userProjects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `priority`
--
ALTER TABLE `priority`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `userProjects`
--
ALTER TABLE `userProjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
