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