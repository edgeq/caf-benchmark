USE caf_benchDB;


INSERT INTO users_field_data (uid, name, mail, created, access, login)
VALUES (01, "student01", 'email@test.com', 1511890692, 1511890692, 1511827200);

CREATE TABLE `node__field_state` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to',
  `field_state_value` varchar(128) NOT NULL COMMENT 'The workflow_states.sid that this entity is currently in.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_state_value` (`field_state_value`)
) 

INSERT INTO node__field_state (entity_id, revision_id, field_state_value)
VALUES (01, 01, "project_finalized");

CREATE TABLE `user__field_school_name` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_name_value` varchar(255) NOT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`)
) 

INSERT INTO user__field_school_name (entity_id, revision_id, field_school_name_value)
VALUES (01, 01, "Curie Metropolitan High School");

CREATE TABLE `user__field_school` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_target_id` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_school_target_id` (`field_school_target_id`)
) 

INSERT INTO user__field_school (entity_id, revision_id, field_school_target_id)
VALUES (01, 01, 01);

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
) 

INSERT INTO school__field_address_location (entity_id, revision_id, field_address_location_address_line1, field_address_location_locality, field_address_location_administrative_area, field_address_location_postal_code, field_address_location_country_code)
VALUES (01, 01, "3212 WEST GEORGE ST", "CHICAGO", "IL", "60618-7529", "US" );

INSERT INTO users_field_data (uid, name, mail, created, access, login)
VALUES  
(02, "student02", 'email02@test.com', 1511890692, 1511890692, 1511827200),
(03, "student03", 'email03@test.com', 1511890692, 1511890692, 1511827200),
(04, "student04", 'email04@test.com', 1511890692, 1511890692, 1511827200),
(05, "student05", 'email05@test.com', 1511890692, 1511890692, 1511827200),
(06, "student06", 'email06@test.com', 1511890692, 1511890692, 1511827200),
(07, "student07", 'email07@test.com', 1511890692, 1511890692, 1511827200),
(08, "student08", 'email08@test.com', 1511890692, 1511890692, 1511827200)
 ;
 
INSERT INTO node__field_state (entity_id, revision_id, field_state_value)
VALUES (02, 02, "project_in_progress"),
(03, 03, "project_archived"),
(04, 04, "project_finalized"),
(05, 05, "project_in_progress"),
(06, 06, "project_archived"),
(07, 07, "project_finalized"),
(08, 08, "project_in_progress")
;

INSERT INTO user__field_school_name (entity_id, revision_id, field_school_name_value)
VALUES (02, 02, "Curie Metropolitan High School"),
(03, 03, "Curie Metropolitan High School"),
(04, 04, "Curie Metropolitan High School"),
(05, 05, "ACE Technical Charter"),
(06, 06, "ACE Technical Charter"),
(07, 07, "Chicago Vocational Academy"),
(08, 08, "Chicago Vocational Academy"),
(09, 09, "Chicago Vocational Academy");

INSERT INTO user__field_school (entity_id, revision_id, field_school_target_id)
VALUES (02, 02, 02),
(03, 03, 02),
(04, 04, 02),
(05, 05, 03),
(06, 06, 03),
(07, 07, 01),
(08, 08, 02);


INSERT INTO school__field_address_location (entity_id, revision_id, field_address_location_address_line1, field_address_location_locality, field_address_location_administrative_area, field_address_location_postal_code, field_address_location_country_code)
VALUES (02, 02, "3212 WEST GEORGE ST", "CHICAGO", "IL", "60618-7529", "US" ),
(03, 03, "10115 SOUTH PRAIRIE AVE", "CHICAGO", "IL", "60628-2135", "US" ),
(04, 04, "1420 WEST GRACE ST", "CHICAGO", "IL", "60613-2802", "US" );