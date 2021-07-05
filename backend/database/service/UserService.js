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
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      user.password = undefined;
      return user;
    } else {
      return false;
    }
  },
  async ListUsers(req, res) {
    return await UserModel.findAll({ attributes: { exclude: ["password"] } });
  },
  async GetUser(req, res) {
    const user = await UserModel.findByPk(res.locals.user);
    if (!user) {
      return false;
    }
    user.password = undefined;
    return user;
  },
  async DeleteUser(req, res) {
    return UserModel.destroy({ where: { id: req.params.id } });
  },
};
