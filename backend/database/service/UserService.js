const UserModel = require("../models/UserModel");
const UtilsBcrypt = require("../utils/Bcrypt");
module.exports = {
  async CreateUser(req, res) {
    const { name, email, password } = req.body;
    const hashedPassword = await UtilsBcrypt.encrypt(password);
    const replicated = await UserModel.findOne({ where: { email } });
    if (!replicated) {
      const user = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    } else {
      res.status(400).json({ error: "user alredy exist" });
    }
  },
  async ListUsers(req, res) {
    return await UserModel.findAll({ attributes: { exclude: ["password"] } });
  },
  async ListUser(req, res) {
    const user = await UserModel.findByPk(res.locals.user);
    user.password = undefined;
    return user;
  },
};
