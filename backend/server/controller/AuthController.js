const AuthService = require("../../database/service/AuthService");
module.exports = {
  async LoginUser(req, res) {
    await AuthService.AuthLogin(req, res);
  },
};
