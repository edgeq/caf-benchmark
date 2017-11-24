# DD SQL Notes

## Some of The Most Important SQL Commands
* _SELECT_ - extracts data from a database
* _UPDATE_ - updates data in a database
* _DELETE_ - deletes data from a database
* _INSERT INTO_ - inserts new data into a database
* _CREATE DATABASE_ - creates a new database
* _ALTER DATABASE_ - modifies a database
* _CREATE TABLE_ - creates a new table
* _ALTER TABLE_ - modifies a table
* _DROP TABLE_ - deletes a table
* _CREATE INDEX_ - creates an index (search key)
* _DROP INDEX_ - deletes an index

## School Queries
`SELECT * FROM DD_2017.user__field_school_name
WHERE field_school_name_value='Simeon Career Academy';`

`SELECT * FROM DD_2017.user__field_school_name
WHERE field_school_name_value LIKE 'ace%' ;` (starts with  ACE)

`SELECT * FROM DD_2017.user__field_school_name
WHERE field_school_name_value LIKE '%ace'` (ends with ACE)

`SELECT * FROM DD_2017.user__field_school_name
WHERE field_school_name_value LIKE '%ace%'` (anywhere there is ACE in the result)

## Last Login Query
`SELECT uid, name, mail, created, changed, access, login, init FROM DD_2017.users_field_data
WHERE login BETWEEN 1483228800 AND 1511564536;`

* returns user logins between Jan 1, 2017 and today.

* You need to use `epochconverter.com` to grab the timestamps you'd like to query for.  

## Account Created Query
`SELECT uid, name, mail, created, changed, access, login, init FROM DD_2017.users_field_data
WHERE created BETWEEN 1483228800 AND 1511564536;`

* returns accounts created between Jan 1, 2017 and today.


