/* Seeds for SQL table. We haven't discussed this type of file yet */
USE boston;

/* Insert 3 Rows into your new table */
INSERT INTO users_field_data (name)
VALUES ("UMass");

INSERT INTO node__field_state (name)
VALUES ("Boston College");

INSERT INTO user__field_school_name (name)
VALUES ("Harvard");

/* OR */
INSERT INTO user__field_school (name)
VALUES ("Emerson"), ("Northeastern"), ("MIT");

INSERT INTO school__field_address_location (name)
VALUES ("Emerson"), ("Northeastern"), ("MIT");
