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

    var dbQuery = "SELECT * FROM school__field_address_location";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
    });

  });

  app.get("/api/totusers", function(req, res) {
    var dbQuery = "SELECT created FROM users_field_data";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
    });
  });

  app.get("/api/actusers", function(req, res) {
    var dbQuery = "SELECT uid, name AS username, mail, from_unixtime(access) AS lastAccess, from_unixtime(login) AS lastLogin FROM users_field_data WHERE created BETWEEN 1483228800 AND 1511564536";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
      console.log(result)
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
