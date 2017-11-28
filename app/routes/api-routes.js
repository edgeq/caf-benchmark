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

    var dbQuery = "SELECT field_address_location_country_code FROM school_field_address_location";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

  
  // app.post("/api/new", function(req, res) {

  //   console.log("benchmark data:");
  //   console.log(req.body);

  //   var dbQuery = "INSERT INTO benchmark (author, body, created_at) VALUES (?,?,?)";

  //   connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
  //     console.log("benchmark Successfully Saved!");
  //     res.end();
  //   });

  // });

};
