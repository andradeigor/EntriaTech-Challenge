const express = require("express");
const CapivaraController = require("../controller/CapivaraController");
const CapivaraMiddleware = require("../middleware/CapivaraMiddleware")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const router = express.Router();

router.post("/", AuthMiddleware.TokenMiddleware,CapivaraMiddleware.CreateCapivara,CapivaraController.CreateCapivara)
router.get("/", AuthMiddleware.TokenMiddleware, CapivaraController.ListCapivaras)
router.delete("/", AuthMiddleware.TokenMiddleware, CapivaraController.DeleteCapivara)


module.exports = router;

