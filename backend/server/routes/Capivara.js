const express = require("express");
const CapivaraController = require("../controller/CapivaraController");
const router = express.Router();


router.get("/", (req,res)=>{
    res.json({menssage: "Ok"})
})

module.exports = router;

