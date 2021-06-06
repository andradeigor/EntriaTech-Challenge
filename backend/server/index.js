require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
require("../database/index");
const UserRouter = require("./routes/User");

app.use(express.json());
app.use(cors());

app.use("/users/", UserRouter);

app.listen(5000, () => {
  console.log("hi, I'm up");
});
