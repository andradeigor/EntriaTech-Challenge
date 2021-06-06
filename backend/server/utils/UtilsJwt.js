require("dotenv").config();
const jwt = require("jsonwebtoken");
module.exports = {
  async decript(token) {
    const id = await jwt.verify(token, process.env.SECRET);
    return id;
  },
  async encript(id) {
    return jwt.sign(id, process.env.SECRET);
  },
};
