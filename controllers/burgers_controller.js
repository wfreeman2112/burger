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

module.exports = router