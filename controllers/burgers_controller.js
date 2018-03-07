var express = require("express");
var router = express.Router();

//Model Defin

let burger = require("../models/burger.js");

router.get("/", function(request, response) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        //response.json(hbsObject);
        response.render("index", hbsObject);
    });
});

router.post("/api/burger", function(request, response) {
    burger.insert(request.body.burger_name, request.body.devoured, function(data) {
        var hbsObject = {
            burger: data
        };
        response.render("index", hbsObject);
    });
});

router.post("/api/updateburger", function(request, response) {

    console.log('POST' + request.body.update_burger_name);

    burger.update(request.body.update_burger_name, function(data) {
        var hbsObject = {
            burger: data
        };
        response.render("index", hbsObject);
    });
});

module.exports = router;