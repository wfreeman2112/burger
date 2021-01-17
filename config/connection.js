//set up dependencies
var mysql = require("mysql");
var connection 
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password1",
    database: "burgers_DB",
  });
} 
// connection.connect(function (err) {
//   if (err) throw err;
// });

module.exports = connection;
