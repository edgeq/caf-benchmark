// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
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

  app.get("/api/totusers", function(req, res) {
    var dbQuery = "SELECT from_unixtime(created) AS userSince FROM users_field_data WHERE created BETWEEN 1483228800 AND 1511564538";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
    });
  });

  //Get Actual Users

  app.get("/api/actusers", function(req, res) {
    var dbQuery = "SELECT from_unixtime(access) AS lastAccess, from_unixtime(login) AS lastLogin FROM users_field_data WHERE created BETWEEN 1483228800 AND 1511564538";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
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
    var dbQuery = "SELECT field_state_value FROM node__field_state";

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
