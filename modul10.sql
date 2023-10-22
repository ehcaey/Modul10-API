-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 22, 2023 at 10:38 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `modul10`
--

-- --------------------------------------------------------

--
-- Table structure for table `devices`
--

CREATE TABLE `devices` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `sensor_spesification` text DEFAULT NULL,
  `gps_location_latitude` decimal(10,6) DEFAULT NULL,
  `gps_location_longitude` decimal(10,6) DEFAULT NULL,
  `device_notification` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `devices`
--

INSERT INTO `devices` (`id`, `name`, `location`, `type`, `sensor_spesification`, `gps_location_latitude`, `gps_location_longitude`, `device_notification`) VALUES
(1, 'Device 1', 'Location 1', 'Type A', 'Sensor Spec A', '123.456789', '-78.901234', 1),
(2, 'Device 2', 'Location 2', 'Type B', 'Sensor Spec B', '45.678901', '-67.890123', 0),
(3, 'Device 3', 'Location 3', 'Type A', 'Sensor Spec C', '12.345678', '-89.012345', 1),
(4, 'Device 4', 'Location 4', 'Type C', 'Sensor Spec D', '78.901234', '-56.789012', 0),
(5, 'Device 5', 'Location 5', 'Type B', 'Sensor Spec E', '90.123456', '-45.678901', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `devices`
--
ALTER TABLE `devices`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `devices`
--
ALTER TABLE `devices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
