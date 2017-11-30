import axios from "axios";

const mysql = require("mysql");

// Set up our connection information
const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "caf_benchDB"
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

// export default {
//   // Gets all users
//   getUsers: function() {
//     return axios.get("/api/totusers");
//   }

// };

