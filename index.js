//set up dependencies
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

//make connection to MySQL
const connection = mysql.createConnection({
  host: "localhost",
  PORT: 3306,
  user: "root",
  password: "password1",
  database: "burgers_DB",
});

connection.connect(function (err) {
  if (err) throw err;
  runSearch();
});

//build server
var app = express();
var PORT = process.env.PORT || 3000;

//starts server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });