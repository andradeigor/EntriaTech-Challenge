const AuthService = require("../../database/service/AuthService");
module.exports = {
  async LoginUser(req, res) {
    const Token = await AuthService.AuthLogin(req, res);
    return res.json({ Token });
  },
};
