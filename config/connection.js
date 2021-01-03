//set up dependencies
var express = require("express");
var mysql = require("mysql");
 
 
//db.json to store and retrieve notes
 

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

});

module.exports = connection

