const express = require("express");
const UserController = require("../controller/UserController");
const router = express.Router();

router.post("/", UserController.CreateUser);

module.exports = router;
