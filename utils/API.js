const mysql = require("mysql2");

// Set up our connection information
const connection = process.env.JAWSDB_URL ?
mysql.createConnection({
  port: 3306,
  host: "otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "laczbspa3uwaxq5v",
  password: "dehsq7lkj7980js5",
  database: "caf_benchDB" //swap with caf_benchDB
}) :
mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
<<<<<<< HEAD
  password: "password", //swap with your local db pw
  database: "DD_2017" //swap with caf_benchDB
=======
  password: "",
<<<<<<< Updated upstream
  database: "caf_benchDB" //swap with caf_benchDB
=======
  // database: "DD_2017" //swap with caf_benchDB
  database: "caf_benchDB"
>>>>>>> Stashed changes
>>>>>>> ec87e98671e6fe8e04b31bce06099193d4b27342
})
;

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
