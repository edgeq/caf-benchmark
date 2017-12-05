// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../utils/API.js");


// Routes
// =============================================================
console.log("we are in this file *************************")
module.exports = function(app) {

  // Get country school is located in


  app.get("/api/location", function(req, res) {

     var USA = 0;

    var dbQuery = "SELECT field_address_location_country_code, COUNT(*) AS subCount FROM school__field_address_location GROUP BY field_address_location_country_code ORDER BY subCount desc";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
     // console.log(result)

      
    });

  });

  //Count number of users from January 1, 2007 until Now.

  app.get("/api/totusers" ,function(req, res) {

    var dbQuery = "SELECT COUNT(*) AS userCount FROM users_field_data WHERE login BETWEEN 1167609600 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)
      
    });
  });

  app.get("/api/totuserdate", function(req, res){
     var dbQuery = "SELECT from_unixtime(login) AS lastLogin FROM users_field_data WHERE login BETWEEN 1167609600 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)
    });
  })


  //Count number of users from January 1, 2017 until Now.

  app.get("/api/actusers", function(req, res) {
    var dbQuery = "SELECT COUNT(*) AS actCount FROM users_field_data WHERE login BETWEEN 1483228800 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)
    });
  });


  //Get dates for Active Users from January 1, 2017 until Now.

  app.get("/api/actuserdate", function(req, res){
     var dbQuery = "SELECT from_unixtime(login) AS lastLogin FROM users_field_data WHERE login BETWEEN 1483228800 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)
    });
  })

  
  //Get Submitted Today (Need to determine how to do this)

  app.get("/api/actProjects", function(req, res) {
    var dbQuery = "SELECT COUNT(*) AS subCount FROM node__field_state JOIN node_field_revision ON node_field_revision.vid = node__field_state.revision_id WHERE (field_state_value='project_finalized' OR field_state_value='project_archived' OR  field_state_value='project_in_progress') AND (changed>=unix_timestamp('2017-11-01') AND changed<=unix_timestamp('2017-12-01')) ORDER by changed DESC ";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
   //   console.log(result)
    });
  });

  //Get Total Submitted

  app.get("/api/totsub", function(req, res) {

    var dbQuery = "SELECT COUNT(*) AS subCount FROM node__field_state JOIN node_field_revision ON node_field_revision.vid = node__field_state.revision_id WHERE (field_state_value='project_finalized' OR field_state_value='project_archived') AND changed>=unix_timestamp('2017-11-01') AND changed<=unix_timestamp('2017-12-01')";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    //  console.log(result)

    });
  });

  //Get Most Active Schools and Count

  app.get("/api/actschools", function(req, res) {
    var dbQuery = "SELECT field_school_name_value, COUNT(*) AS subCount FROM user__field_school_name GROUP BY field_school_name_value ORDER BY subCount desc";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    //  console.log(result)

    });
  });

  //Age younger 13.
  app.get("/api/ageGroup1", function(req, res){
    var dbQuery = "SELECT COUNT(*) AS subCount FROM user__field_birthdate WHERE field_birthdate_value BETWEEN '2005-01-01' AND '2017-12-31';";

     connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });

  });

  //Age Group 13 - 14
    app.get("/api/ageGroup2", function(req, res){
    var dbQuery = "SELECT COUNT(*) AS subCount FROM user__field_birthdate WHERE field_birthdate_value BETWEEN '2003-01-01' AND '2004-12-31';";

     connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });

  });


  //Age Group 15 - 18
    app.get("/api/ageGroup3", function(req, res){
    var dbQuery = "SELECT COUNT(*) AS subCount FROM user__field_birthdate WHERE field_birthdate_value BETWEEN '1999-01-01' AND '2004-12-31';";

     connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });

  });


  //Age Group 19 - 22

     app.get("/api/ageGroup4", function(req, res){
    var dbQuery = "SELECT COUNT(*) AS subCount FROM user__field_birthdate WHERE field_birthdate_value BETWEEN '1995-01-01' AND '1998-12-31';";

     connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });

  });



};
