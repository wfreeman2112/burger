var router = require("express").Router()
var burger = require("../models/burger")

// selectAll()
// insertOne()
// updateOne()
// //creating routes to display handlebars
router.get("/", function(req, res){
    burger.selectAll(function (burgerDb){
        res.render("index", {
            burgers: burgerDb
        })
    });
});

//for insertOne am I using "put"?
router.post("/", function(req, res){
    burger.insertOne(function (burgerDb){
        res.render("index", {
            burgers: burgerDb
        })
    });
});
  

//for Update am I using put?
router.put("/api/burgers/:id", function(req, res){
    burger.updateOne(function (burgerDb){
        res.render("index", {
            burgers: burgerDb
        })
    });
});
module.exports = router