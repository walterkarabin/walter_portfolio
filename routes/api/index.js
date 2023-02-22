var express = require("express");

var router = express.Router();

// todo add in error info

router.use("/users", require("./users"));

module.exports = router;