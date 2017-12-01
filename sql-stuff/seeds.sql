/* Seeds for SQL table. We haven't discussed this type of file yet */
USE caf_benchDB;


INSERT INTO users_field_data (uid, name, mail, created, access, login)
VALUES (01, "student01", 'email@test.com', 1511890692, 1511890692, 1511827200),
(02, "student02", 'email02@test.com', 1511890692, 1511890692, 1511827200),
(03, "student03", 'email03@test.com', 1511890692, 1511890692, 1511827200),
(04, "student04", 'email04@test.com', 1511890692, 1511890692, 1511827200),
(05, "student05", 'email05@test.com', 1511890692, 1511890692, 1511827200),
(06, "student06", 'email06@test.com', 1511890692, 1511890692, 1511827200),
(07, "student07", 'email07@test.com', 1511890692, 1511890692, 1511827200),
(08, "student08", 'email08@test.com', 1511890692, 1511890692, 1511827200)
 ;


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

-- Error Code: 1062. Duplicate entry '1' for key 'PRIMARY'

INSERT INTO user__field_school_name (entity_id, revision_id, field_school_name_value)
VALUES (02, 02, "Curie Metropolitan High School"),
(03, 03, "Curie Metropolitan High School"),
(04, 04, "Curie Metropolitan High School"),
(05, 05, "ACE Technical Charter"),
(06, 06, "ACE Technical Charter"),
(07, 07, "Chicago Vocational Academy"),
(08, 08, "Chicago Vocational Academy");


INSERT INTO user__field_school (entity_id, revision_id, field_school_target_id)
VALUES (02, 02, 01),
(03, 03, 01),
(04, 04, 01),
(05, 05, 02),
(06, 06, 02),
(07, 07, 03),
(08, 08, 03);

INSERT INTO school__field_address_location (entity_id, revision_id, field_address_location_address_line1, field_address_location_locality, field_address_location_administrative_area, field_address_location_postal_code, field_address_location_country_code)
VALUES (02, 02, "3212 WEST GEORGE ST", "CHICAGO", "IL", "60618-7529", "US" ),
(03, 03, "10115 SOUTH PRAIRIE AVE", "CHICAGO", "IL", "60628-2135", "US" ),
(04, 04, "1420 WEST GRACE ST", "CHICAGO", "IL", "60613-2802", "US" );
