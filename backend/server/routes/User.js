const express = require("express");
const UserController = require("../controller/UserController");
const UserMiddleware = require("../middleware/UserMiddleware");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const router = express.Router();

router.post("/", UserMiddleware.CreateUser, UserController.CreateUser);
router.get("/", AuthMiddleware.TokenMiddleware, UserController.GetUser);

module.exports = router;
