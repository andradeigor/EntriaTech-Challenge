const AuthService = require("../../database/service/AuthService");
module.exports = {
  async LoginUser(req, res) {
    const token = await AuthService.AuthLogin(req, res);
    token
      ? res.json({ token })
      : res.status(400).json({ error: "Invalid Email or Password" });
  },
  async Me(req, res) {
    const Id = res.locals.user;
    res.json({ Id });
  },
};
