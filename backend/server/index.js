require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
require("../database/index");

app.use(express.json());
app.use(cors);

app.listen(5000, () => {
  console.log("hi, I'm up");
});
