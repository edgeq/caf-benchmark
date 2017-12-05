-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: caf_benchDB
-- ------------------------------------------------------
-- Server version	5.7.19

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
-- Table structure for table `node__field_state`
--

DROP TABLE IF EXISTS `node__field_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `node__field_state` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to',
  `field_state_value` varchar(128) NOT NULL COMMENT 'The workflow_states.sid that this entity is currently in.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_state_value` (`field_state_value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `node__field_state`
--

LOCK TABLES `node__field_state` WRITE;
/*!40000 ALTER TABLE `node__field_state` DISABLE KEYS */;
INSERT INTO `node__field_state` VALUES (1,1,'project_finalized'),(2,2,'project_in_progress'),(3,3,'project_archived'),(4,4,'project_finalized'),(5,5,'project_in_progress'),(6,6,'project_archived'),(7,7,'project_finalized'),(8,8,'project_in_progress');
/*!40000 ALTER TABLE `node__field_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `node_field_revision`
--

DROP TABLE IF EXISTS `node_field_revision`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `node_field_revision` (
  `vid` int(10) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `uid` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  `created` int(11) DEFAULT NULL,
  `changed` int(11) DEFAULT NULL,
  PRIMARY KEY (`vid`),
  KEY `uid` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `node_field_revision`
--

LOCK TABLES `node_field_revision` WRITE;
/*!40000 ALTER TABLE `node_field_revision` DISABLE KEYS */;
INSERT INTO `node_field_revision` VALUES (1,'Project 1',1234,1508089405,1511199805),(2,'Project 2',2345,1511199805,1511199805),(3,'Project 3',3456,1511199805,1511977405),(4,'Project 4',4567,1512150205,1512150205),(5,'Project 5',5678,1512150205,1512409405),(6,'Project 6',2134,1509644605,1510508605),(7,'Project 7',1458,1510940605,1510508605),(8,'Project 8',2675,1512150205,1512150205),(9,'Project 9',1735,1509558205,1512236605),(10,'Project 10',2157,1509903805,1512063805);
/*!40000 ALTER TABLE `node_field_revision` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school__field_address_location`
--

DROP TABLE IF EXISTS `school__field_address_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school__field_address_location` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_address_location_address_line1` varchar(255) DEFAULT NULL,
  `field_address_location_address_line2` varchar(255) DEFAULT NULL,
  `field_address_location_locality` varchar(255) DEFAULT NULL,
  `field_address_location_administrative_area` varchar(255) DEFAULT NULL,
  `field_address_location_postal_code` varchar(255) DEFAULT NULL,
  `field_address_location_country_code` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_address_location_administrative_area` (`field_address_location_administrative_area`(191))
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school__field_address_location`
--

LOCK TABLES `school__field_address_location` WRITE;
/*!40000 ALTER TABLE `school__field_address_location` DISABLE KEYS */;
INSERT INTO `school__field_address_location` VALUES (2,2,'3212 WEST GEORGE ST',NULL,'CHICAGO','IL','60618-7529','US'),(3,3,'10115 SOUTH PRAIRIE AVE',NULL,'CHICAGO','IL','60628-2135','US'),(4,4,'1420 WEST GRACE ST',NULL,'CHICAGO','IL','60613-2802','US'),(5,5,'123 abc ST',NULL,'Atlanta','GA','40434-4567','US'),(6,6,'23 ASFK  LANE',NULL,'Berlin','GR','434348','GR'),(7,7,'468 juou place',NULL,'Paris','FR','389277','FR');
/*!40000 ALTER TABLE `school__field_address_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user__field_birthdate`
--

DROP TABLE IF EXISTS `user__field_birthdate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user__field_birthdate` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `field_birthdate_value` date NOT NULL COMMENT 'The date value.',
  PRIMARY KEY (`entity_id`),
  KEY `field_birthdate_value` (`field_birthdate_value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user__field_birthdate`
--

LOCK TABLES `user__field_birthdate` WRITE;
/*!40000 ALTER TABLE `user__field_birthdate` DISABLE KEYS */;
INSERT INTO `user__field_birthdate` VALUES (1,'2000-01-01'),(2,'2000-01-01'),(7,'2000-06-07'),(3,'2001-02-03'),(4,'2002-03-04'),(9,'2002-08-09'),(5,'2003-04-05'),(8,'2003-07-03'),(6,'2003-07-08'),(10,'2007-02-08');
/*!40000 ALTER TABLE `user__field_birthdate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user__field_school`
--

DROP TABLE IF EXISTS `user__field_school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user__field_school` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_target_id` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_school_target_id` (`field_school_target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user__field_school`
--

LOCK TABLES `user__field_school` WRITE;
/*!40000 ALTER TABLE `user__field_school` DISABLE KEYS */;
INSERT INTO `user__field_school` VALUES (2,2,1),(3,3,1),(4,4,1),(5,5,2),(6,6,2),(7,7,3),(8,8,3);
/*!40000 ALTER TABLE `user__field_school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user__field_school_name`
--

DROP TABLE IF EXISTS `user__field_school_name`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user__field_school_name` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_name_value` varchar(255) NOT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user__field_school_name`
--

LOCK TABLES `user__field_school_name` WRITE;
/*!40000 ALTER TABLE `user__field_school_name` DISABLE KEYS */;
INSERT INTO `user__field_school_name` VALUES (2,2,'Curie Metropolitan High School'),(3,3,'Curie Metropolitan High School'),(4,4,'Curie Metropolitan High School'),(5,5,'ACE Technical Charter'),(6,6,'ACE Technical Charter'),(7,7,'Chicago Vocational Academy'),(8,8,'Chicago Vocational Academy');
/*!40000 ALTER TABLE `user__field_school_name` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_field_data`
--

DROP TABLE IF EXISTS `users_field_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_field_data` (
  `uid` int(10) unsigned NOT NULL,
  `name` varchar(60) NOT NULL,
  `mail` varchar(254) DEFAULT NULL,
  `created` int(11) NOT NULL,
  `access` int(11) NOT NULL,
  `login` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_field_data`
--

LOCK TABLES `users_field_data` WRITE;
/*!40000 ALTER TABLE `users_field_data` DISABLE KEYS */;
INSERT INTO `users_field_data` VALUES (1,'student01','email@test.com',1511890692,1511890692,1511827200),(2,'student02','email02@test.com',1511827200,1511890692,1482926400),(3,'student03','email03@test.com',1511890692,1511890692,1511827200),(4,'student04','email04@test.com',1511890692,1511890692,1511827200),(5,'student05','email05@test.com',1511890692,1511890692,1511827200),(6,'student06','email06@test.com',1511890692,1511890692,1511827200),(7,'student07','email07@test.com',1511890692,1511890692,1511827200),(8,'student08','email08@test.com',1511890692,1511890692,1511827200);
/*!40000 ALTER TABLE `users_field_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-05 15:24:52
