const UserModel = require("../models/UserModel");
const Bcrypt = require("../utils/Bcrypt");
module.exports = {
  async CreateUser(req, res) {
    const { name, email, password } = req.body;
    const replicated = UserModel.findOne({ where: { email } });
    if (!replicated) {
      const hashedPassword = await Bcrypt.encrypt(password);
      const user = await UserModel.create({
        name,
        email,
        password,
      });
      user.password = undefined;
      return user;
    } else {
      res.json(400, { error: "user alredy exist" });
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
