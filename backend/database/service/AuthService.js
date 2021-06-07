const UserModel = require("../models/UserModel");
const UtilsBcrypt = require("../utils/Bcrypt");
const Utilsjwt = require("../../server/utils/UtilsJwt");
module.exports = {
  async AuthLogin(req, res) {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { email } });
    return user && password ? await this.GetToken(user, password) : false;
  },
  async GetToken(user, password) {
    const login = await UtilsBcrypt.decript(password, user.password);
    const token = login ? await Utilsjwt.encript(user.id) : false;
    return token;
  },
};
