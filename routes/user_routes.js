//The api routeeees maps to the controllers
var express = require("express");
var router = express.Router();

var Usercontroller = require("../contollers/user_controller");

router.get("/",Usercontroller.getUsers);
module.exports = router;