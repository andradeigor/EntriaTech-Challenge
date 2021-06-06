const express = require("express");
const UserController = require("../controller/UserController");
const UserMiddleware = require("../middleware/UserMiddleware");
const router = express.Router();

router.post("/", UserMiddleware.CreateUser, UserController.CreateUser);

module.exports = router;
