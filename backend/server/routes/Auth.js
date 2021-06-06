const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const AuthController = require("../controller/AuthController");
const router = express.Router();

router.post("/", AuthMiddleware.LoginUser, AuthController.LoginUser);

module.exports = router;
