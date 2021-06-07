const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const AuthController = require("../controller/AuthController");
const router = express.Router();

router.post("/", AuthMiddleware.LoginUser, AuthController.LoginUser);
router.get("/me", AuthMiddleware.TokenMiddleware, AuthController.Me);

module.exports = router;
