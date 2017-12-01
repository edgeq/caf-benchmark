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

    var dbQuery = "SELECT * FROM school__field_address_location";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)


      // Count for How many schools are in the US

      for (var i = 0; i < result.length; i++) {
        result.field_address_location_country_code = "US"
        USA = USA + 1;
      }

      console.log(USA);


    });

  });

  //Get Total Users

  app.get("/api/totusers" ,function(req, res) {

    var userCount = 0;

    var dbQuery = "SELECT COUNT(*) AS userCount FROM users_field_data WHERE login BETWEEN 1167609600 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)

      //Count for number of users from January 1, 2017 until Now.

      
    });
  });

  //Get Actual Users

  app.get("/api/actusers", function(req, res) {
    var dbQuery = "SELECT COUNT(*) AS actCount FROM users_field_data WHERE login BETWEEN 1483228800 and 1512129540";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      //console.log(result)
    });
  });

  //Get Submitted Today

  app.get("/api/subtoday", function(req, res) {
    var dbQuery = "SELECT revision_id FROM node__field_state";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
    });
  });

  //Get Total Submitted

  app.get("/api/totsub", function(req, res) {

    var projFin = 0;

    var dbQuery = "SELECT COUNT(*) AS subCount FROM node__field_state WHERE field_state_value = 'project_finalized'";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });
  });

  //Get Most Active Schools

  app.get("/api/actschools", function(req, res) {
    var dbQuery = "SELECT field_school_name_value FROM user__field_school_name";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)

    });
  });

  //Need Route for User Age



};
