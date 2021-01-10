//set up dependencies
var express = require("express");
var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "password1",
    database: "burgers_DB",
  });
}connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
