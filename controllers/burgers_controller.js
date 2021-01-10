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


router.post("/", function(req, res){
     
    burger.insertOne(["burger_name", "devoured"],
    [req.body.burger_name, false], function (burgerDb){
//   redirect is a get request      
        res.redirect("/")
    });
});
  

//updating id for devouring
router.put("/api/burgers/:id", function(req, res){
    var id = req.params.id
    
    burger.updateOne(["devoured", "id"], [req.body.devoured, id], function (burgerDb){
        res.json(burgerDb)
    });
});
module.exports = router