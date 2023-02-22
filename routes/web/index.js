var express = require("express");

var router = express.Router();

// todo add in error info

router.use("/", require("./home"));

module.exports = router;