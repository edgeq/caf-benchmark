DROP DATABASE IF EXISTS caf_benchDB;
CREATE database caf_benchDB;

USE caf_benchDB;

CREATE TABLE `users_field_data` (
  `uid` int(10) unsigned NOT NULL,
  `name` varchar(60) NOT NULL,
  `mail` varchar(254) DEFAULT NULL,
  `created` int(11) NOT NULL,
  `changed` int(11) DEFAULT NULL,
  `access` int(11) NOT NULL,
  `login` int(11) DEFAULT NULL,
  PRIMARY KEY (`uid`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='The data table for user entities.'

CREATE TABLE `node__field_state` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to',
  `field_state_value` varchar(128) NOT NULL COMMENT 'The workflow_states.sid that this entity is currently in.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_state_value` (`field_state_value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Data storage for node field field_state.'

CREATE TABLE `user__field_school_name` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_name_value` varchar(255) NOT NULL,
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Data storage for user field field_school_name.'

CREATE TABLE `user__field_school` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `revision_id` int(10) unsigned NOT NULL COMMENT 'The entity revision id this data is attached to, which for an unversioned entity type is the same as the entity id',
  `field_school_target_id` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  PRIMARY KEY (`field_school_target_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_school_target_id` (`field_school_target_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Data storage for user field field_school.'

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Data storage for school field field_address_location.'


CREATE TABLE `user__field_birthdate` (
  `entity_id` int(10) unsigned NOT NULL COMMENT 'The entity id this data is attached to',
  `field_birthdate_value` varchar(20) NOT NULL COMMENT 'The date value.',
  PRIMARY KEY (`entity_id`),
  KEY `revision_id` (`revision_id`),
  KEY `field_birthdate_value` (`field_birthdate_value`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Data storage for user field field_birthdate.'

INSERT INTO user__field_birthdate (entity_id, revision_id,  field_birthdate_value)
VALUES (01, 01-02-2000),
(02, 01-02-2000),
(03, 02-03-2001),
(04, 03-04-2002),
(05, 04-05-2003),
(06, 05-06-2004),
(07, 06-07-2000),
(08, 07-08-2003),
(09, 08-09-2002)
;

CREATE TABLE `node_field_revision` (
  `vid` int(10) unsigned NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `uid` int(10) unsigned NOT NULL COMMENT 'The ID of the target entity.',
  `created` int(11) DEFAULT NULL,
  `changed` int(11) DEFAULT NULL,
  PRIMARY KEY (`vid`),
  KEY (`uid`)
)
