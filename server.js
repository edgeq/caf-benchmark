var express = require("express");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var connection = require("./config/connection.js")
var mysql = require("mysql");

var app = express();
var PORT = 3000;

require("./controllers/api-routes.js")(app); 	

app.use(bodyParser.urlencoded({ extended: true}));



app.use(bodyParser.json({ type: 'application/**json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
app.use(bodyParser.text({ type: 'text/html' }));


 // request("https://api.slideroom.com/api/v2/applicant/attributes/names", function(error, response, html) {
 // 	//console.log(response)

 //  var $ = cheerio.load(html);
  
   	
 //  });

 // app.get("/api/location", function(req, res) {

 //    var dbQuery = "SELECT * FROM school_field_address_location";

 //    connection.query(dbQuery, function(err, result) {
 //      res.json(result);
 //      console.log(result)
 //    });

 //  });

 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);

})

