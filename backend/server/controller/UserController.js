const UserService = require("../../database/service/UserService");

module.exports = {
  async CreateUser(req, res) {
    const user = await UserService.CreateUser(req, res);
    user
      ? res.json({ user })
      : res.status(400).json({ error: "user alredy exist" });
  },
  async GetUser(req, res) {
    const user = await UserService.GetUser(req, res);
    user
      ? res.json({ user })
      : res.status(400).json({ error: "User Not Found" });
  },
};
