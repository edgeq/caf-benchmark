const mysql = require("mysql2");

// Set up our connection information
const connection = process.env.JAWSDB_URL ?
mysql.createConnection({
  port: 3306,
  host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "laczbspa3uwaxq5v",
  password: "dehsq7lkj7980js5",
  database: "iihcxxf21iuuxzv3" //jawsdb creates a schema for you. and that's what you have to use.
}) :
mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "caf_benchDB" //swap with caf_benchDB
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
