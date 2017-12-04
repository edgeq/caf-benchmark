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

    var dbQuery = "SELECT field_address_location_country_code, COUNT(*) FROM school__field_address_location GROUP BY field_address_location_country_code";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

      
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

  app.get("/api/subtoday", function(req, res) {
    var dbQuery = "SELECT revision_id FROM node__field_state";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
    });
  });

  //Get Total Submitted

  app.get("/api/totsub", function(req, res) {

    var dbQuery = "SELECT COUNT(*) AS subCount FROM node__field_state WHERE field_state_value = 'project_finalized'";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });
  });

  //Get Most Active Schools and Count

  app.get("/api/actschools", function(req, res) {
    var dbQuery = "SELECT field_school_name_value, COUNT(*) FROM user__field_school_name GROUP BY field_school_name_value";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });
  });

  //Age
  app.get("/api/age", function(req, res){
    var dbQuery = "SELECT TIMESTAMPDIFF (YEAR, field_birthdate_value, CURDATE()) FROM user__field_birthdate AS AGE"
  
     connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });

  });


};
