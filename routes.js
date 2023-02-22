var express = require("express");

var router = express.Router();

router.get("/", function(req,res) {
    // console.log("Hello I'm on the start page!");
    res.render("home/index");
});

router.get("/home", function(req,res) {
    res.render("home/home");
});

router.get("/about", function(req,res) {
    res.render("home/about");
});

router.get("/connect", function(req,res) {
    res.render("home/connect");
});



module.exports = router;