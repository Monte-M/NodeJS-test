-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2021 at 08:31 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `group_id`, `user_id`) VALUES
(2, 1, 1),
(3, 2, 2),
(5, 5, 1),
(12, 3, 1),
(13, 2, 1),
(14, 1, 45),
(15, 4, 1),
(16, 1, 3),
(17, 2, 3),
(18, 3, 3),
(19, 4, 3),
(20, 5, 3),
(26, 1, 81),
(27, 2, 81),
(28, 3, 81),
(29, 4, 81),
(30, 5, 81);

-- --------------------------------------------------------

--
-- Table structure for table `bills`
--

CREATE TABLE `bills` (
  `id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  `amount` float(5,0) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bills`
--

INSERT INTO `bills` (`id`, `group_id`, `amount`, `description`) VALUES
(1, 2, 25, 'For tickets'),
(2, 2, 50, 'For fuel'),
(3, 2, 10, 'For icecream'),
(4, 3, 20, 'For taxi'),
(5, 4, 40, 'For activities'),
(6, 4, 10, 'For taxi'),
(8, 1, 50, 'For fuel'),
(9, 1, 20, 'For taxi'),
(10, 1, 10, 'For snacks'),
(12, 1, 100, 'For entertainment'),
(14, 3, 80, 'For learning'),
(15, 5, 100, 'For learning'),
(16, 5, 20, 'For tickets');

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE `groups` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `groups`
--

INSERT INTO `groups` (`id`, `name`) VALUES
(1, 'Trip to NY'),
(2, 'Trip to LA'),
(3, 'Trip to SF'),
(4, 'Trip to OH'),
(5, 'Trip to TX');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_timestamp` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `reg_timestamp`) VALUES
(1, 'Mantas Matelionis', 'mantas@gmail.com', '$2a$10$feiuNBbVb0DOOX3T6xmyZOOJTemr5WPKEQTLC.olkIzdscJbYfWHe', '2021-10-25 09:08:23'),
(2, 'Mantvydas Antanavicius', 'mantvydas@gmail.com', '$2a$10$mOgtQIokeaYjz0HoMFg8ROtnl6Boume1T2BYOyTN76eH158ptuZpy', '2021-10-25 16:56:55'),
(3, 'Inga Jankauskaite', 'inga@gmail.com', '$2a$10$1ne4Ci8AsfQHUKKYuICUk.7crB13LDoIEJCi4zVPPA2PGYqgXnI8W', '2021-10-25 11:31:17'),
(20, 'Jonas Rudokas', 'jonas@gmail.com', '$2a$10$VTKGHlKJiuoxLWk3lnS.NuNmr.QhJT4./RvlH3xCAJIAJuMDJPHs2', '2021-10-25 11:53:33'),
(22, 'Viktoras Ramanauskas', 'viktoras@gmail.com', '$2a$10$yku3K4sJ8AlEQrgB4y.jL.J5yh7z4syqRKEdkAKimDLFaXga3BKIm', '2021-10-25 11:54:09'),
(23, 'Laimis Vaitkus', 'laimis@gmail.com', '$2a$10$p63MuZAFepP/HtbPlKogdusufdZne0Zr3z4wvr9WY2rNWXBMaG37a', '2021-10-25 11:55:53'),
(24, 'Raimondas Bagdonas', 'raimondas@gmail.com', '$2a$10$Q7PhyxMjvxJgpTcv6Kmu4e82EmXTcfUlRt47bG8DUoFTuCyoPJNeK', '2021-10-25 11:57:05'),
(25, 'Kajus Baltrusaitis', 'kajus@gmail.com', '$2a$10$MAFC2ZhujM9RIsU0o6hal.KS5jNjd1nxGksXxiavzWTn/IJh.qUAG', '2021-10-25 11:57:56'),
(26, 'Ramunas Rudokas', 'ramunas@gmail.com', '$2a$10$R/2ki4rxrLi0Vz5Rugm7xeDg.LKDsgZELJsWSs5qtg5UPhE0meQxK', '2021-10-25 11:58:24'),
(27, 'Sarunas Barkauskas', 'sarunas@gmail.com', '$2a$10$TnczTMGjwDtY45vGr1F4i.rvQqx9/tz7q8okaWnC.x6WSKTWUmhka', '2021-10-25 11:58:53'),
(28, 'Nojus Ciuberskis', 'nojus@gmail.com', '$2a$10$XKxt.r9ujR9wEd/mz2CV.ukDUmrz2egNBN7Sscpd36RwWppoBfk1.', '2021-10-25 11:59:22'),
(29, 'Petras Grazulis', 'petras@gmail.com', '$2a$10$lQHAK5kGzfBwO23ghIyIzubXEoMUp111gJibJYDs/bN9WHVSN4P3y', '2021-10-25 11:59:41'),
(32, 'Ignas Adomaitis', 'ignas@gmail.com', '$2a$10$oHIpdfRM3mUdfs16R/yjBOO9UCRnClop8mABOg1VSQmGGFbBHnYDW', '2021-10-25 15:56:26'),
(45, 'Edvinas Jurele', 'edvinas@gmail.com', '$2a$10$O6HPvZgACQ0I7zpXViXtKu2HBtoex/cOYJV1AQzcZoZizb4Mrfuz6', '2021-10-25 16:57:20'),
(71, 'Jurgis Kazenas', 'jurgis@gmail.com', '$2a$10$DgD00kCpsUF1dibgVArUAeKJJwbz8xb/rC.d1tRaxB81XK/.vc1Ui', '2021-10-26 08:53:47'),
(79, 'Rokas Adomaitis', 'rokas@gmail.com', '$2a$10$.aSfTZPOpMpmh8.PLSHrMuy.24uV4lrA5Oam.QV3Twsp.Tn66Q8du', '2021-10-26 09:09:08'),
(81, 'Leonardas Vaitkus', 'leonardas@gmail.com', '$2a$10$IRxeVOpdhrwW7VkV7BlYR.Xp6/PL.MtWw0J68mrFhHIgd2XDwr0Aa', '2021-10-26 09:29:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts-to-users` (`user_id`),
  ADD KEY `accounts-to-groups` (`group_id`);

--
-- Indexes for table `bills`
--
ALTER TABLE `bills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bills-to-groups` (`group_id`);

--
-- Indexes for table `groups`
--
ALTER TABLE `groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `bills`
--
ALTER TABLE `bills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `groups`
--
ALTER TABLE `groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts-to-groups` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`),
  ADD CONSTRAINT `accounts-to-users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `bills`
--
ALTER TABLE `bills`
  ADD CONSTRAINT `bills-to-groups` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
