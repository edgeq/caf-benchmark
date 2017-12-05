DROP DATABASE IF EXISTS caf_benchDB;
CREATE database caf_benchDB;

USE caf_benchDB;

CREATE TABLE `users_field_data` (
  `uid` int(10) unsigned NOT NULL,
  `name` varchar(60) NOT NULL,
  `mail` varchar(254) DEFAULT NULL,
  `created` int(11) NOT NULL,
  `access` int(11) NOT NULL,
  `login` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`)
  );

INSERT INTO users_field_data (uid, name, mail, created, access, login)
VALUES (01, "student01", 'email@test.com', 1511890692, 1511890692, 1511827200),
(02, "student02", 'email02@test.com', 1511827200, 1511890692, 1482926400),
(03, "student03", 'email03@test.com', 1511890692, 1511890692, 1511827200),
(04, "student04", 'email04@test.com', 1511890692, 1511890692, 1511827200),
(05, "student05", 'email05@test.com', 1511890692, 1511890692, 1511827200),
(06, "student06", 'email06@test.com', 1511890692, 1511890692, 1511827200),
(07, "student07", 'email07@test.com', 1511890692, 1511890692, 1511827200),
(08, "student08", 'email08@test.com', 1511890692, 1511890692, 1511827200)
 ;



CREATE TABLE `node__field_state` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to',
  `field_state_value` varchar(128) NOT NULL COMMENT 'The workflow_states.sid that this entity is currently in.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_state_value` (`field_state_value`)
  );

INSERT INTO node__field_state (entity_id, revision_id, field_state_value)
VALUES (01, 01, "project_finalized"),
(02, 02, "project_in_progress"),
(03, 03, "project_archived"),
(04, 04, "project_finalized"),
(05, 05, "project_in_progress"),
(06, 06, "project_archived"),
(07, 07, "project_finalized"),
(08, 08, "project_in_progress")
;



CREATE TABLE `user__field_school_name` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_name_value` varchar(255) NOT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`)
  );

INSERT INTO user__field_school_name (entity_id, revision_id, field_school_name_value)
VALUES (02, 02, "Curie Metropolitan High School"),
(03, 03, "Curie Metropolitan High School"),
(04, 04, "Curie Metropolitan High School"),
(05, 05, "ACE Technical Charter"),
(06, 06, "ACE Technical Charter"),
(07, 07, "Chicago Vocational Academy"),
(08, 08, "Chicago Vocational Academy");


CREATE TABLE `user__field_school` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_target_id` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_school_target_id` (`field_school_target_id`)
  );

INSERT INTO user__field_school (entity_id, revision_id, field_school_target_id)
VALUES (02, 02, 01),
(03, 03, 01),
(04, 04, 01),
(05, 05, 02),
(06, 06, 02),
(07, 07, 03),
(08, 08, 03);


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
  );

INSERT INTO school__field_address_location (entity_id, revision_id, 
field_address_location_address_line1, 
field_address_location_locality, 
field_address_location_administrative_area, 
field_address_location_postal_code, 
field_address_location_country_code)
VALUES (02, 02, "3212 WEST GEORGE ST", "CHICAGO", "IL", "60618-7529", "US" ),
(03, 03, "10115 SOUTH PRAIRIE AVE", "CHICAGO", "IL", "60628-2135", "US" ),
(04, 04, "1420 WEST GRACE ST", "CHICAGO", "IL", "60613-2802", "US" ),
(05, 05, "123 abc ST","Atlanta","GA","40434-4567","US"),
(06, 06, "23 ASFK  LANE","Berlin", "GR", "434348","GR"),
(07, 07, "468 juou place","Paris", "FR", "389277","FR");

CREATE TABLE `user__field_birthdate` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `field_birthdate_value` DATE NOT NULL COMMENT 'The date value.',
  PRIMARY KEY (`entity_id`),
  KEY `field_birthdate_value` (`field_birthdate_value`)
  );

INSERT INTO user__field_birthdate (entity_id, field_birthdate_value) 
VALUES (10, '2007,02,08'),
(01,'2000,01,01'),
(02,'2000,01,01'),
(03,'2001,02,03'),
(04,'2002,03,04'),
(05,'2003,04,05'),
(06,'2003,07,08'),
(07,'2000,06,07'),
(08,'2003,07,03'),
(09,'2002,08,09');



CREATE TABLE `node_field_revision` (
  `vid` int(10) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `uid` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  `created` int(11) DEFAULT NULL,
  `changed` int(11) DEFAULT NULL,
  PRIMARY KEY (`vid`),
  KEY (`uid`)
);

INSERT INTO node_field_revision (vid, title, uid, created, changed)
VALUES (1,'Project 1',1234,1508089405,1511199805),
(2,'Project 2',2345,1511199805,1511199805),
(3,'Project 3',3456,1511199805,1511977405),
(4,'Project 4',4567,1512150205,1512150205),
(5,'Project 5',5678,1512150205,1512409405),
(6,'Project 6',2134,1509644605,1510508605),
(7,'Project 7',1458,1510940605,1510508605),
(8,'Project 8',2675,1512150205,1512150205),
(9,'Project 9',1735,1509558205,1512236605),
(10,'Project 10',2157,1509903805,1512063805);