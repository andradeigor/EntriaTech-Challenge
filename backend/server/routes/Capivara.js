const express = require("express");
const CapivaraController = require("../controller/CapivaraController");
const CapivaraMiddleware = require("../middleware/CapivaraMiddleware")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const router = express.Router();

router.post("/", AuthMiddleware.TokenMiddleware,CapivaraMiddleware.CreateCapivara,CapivaraController.CreateCapivara)


module.exports = router;

