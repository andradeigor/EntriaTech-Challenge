const UserModel = require("../models/UserModel");
const UtilsBcrypt = require("../utils/Bcrypt");
const Utilsjwt = require("../../server/utils/UtilsJwt");
module.exports = {
  async AuthLogin(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { email } });
    if (!user) {
      res.status(400).json({ error: "Invalid Email or Password" });
      return;
    }
    const login = await UtilsBcrypt.decript(password, user.password);
    if (login) {
      const token = await Utilsjwt.encript(user.id);
      return token;
    } else {
      res.status(400).json({ error: "Invalid Email or Password" });
      return;
    }
  },
};
