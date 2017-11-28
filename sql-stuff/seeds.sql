/* Seeds for SQL table. We haven't discussed this type of file yet */
USE caf_benchDB;


INSERT INTO users_field_data (uid, name, mail, created, access, login)
VALUES (01, "student01", 'email@test.com', 1511890692, 1511890692, 1511827200);


INSERT INTO node__field_state (entity_id, revision_id, field_state_value)
VALUES (01, 01, "project_finalized");

INSERT INTO user__field_school_name (entity_id, revision_id, field_school_name_value)
VALUES (01, 01, "Curie Metropolitan High School");

/* OR */
INSERT INTO user__field_school (entity_id, revision_id, field_school_target_id)
VALUES (01, 01, 01);

INSERT INTO school__field_address_location (entity_id, revision_id, field_address_location_address_line1, field_address_location_locality, field_address_location_administrative_area, field_address_location_postal_code, field_address_location_country_code)
VALUES (01, 01, "3212 WEST GEORGE ST", "CHICAGO", "IL", "60618-7529", "US" );
