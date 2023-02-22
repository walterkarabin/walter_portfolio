var express = require("express");

var router = express.Router();

// todo add in error info

router.use("/", require("./users"));

module.exports = router;