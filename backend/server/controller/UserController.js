const UserService = require("../../database/service/UserService");

module.exports = {
  async CreateUser(req, res) {
    const user = await UserService.CreateUser(req, res);
    return res.json({ user });
  },
};
