var express = require("express");
var expressHandlebars = require("express-handlebars")

//build server
var app = express();
var PORT = process.env.PORT || 3000;



//creating public folder/URL paths
app.use(express.static("public"));

//data parsing from client
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//create API routes to get notes about burgers


//import burger controller
var controller = require("./controllers/burgers_controller.js");
app.use(controller)

//extablishing handlebars engine
app.engine("handlebars", expressHandlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

//starts server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
