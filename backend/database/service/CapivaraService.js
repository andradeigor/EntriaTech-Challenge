const Usermodel = require("../models/UserModel");
const CapivaraModel = require("../models/CapivaraModel");

module.exports = {
  async CreateCapivara(req, res) {
    const { name, imageURL } = req.body;
    const userId = res.locals.user;
    const capivara = await CapivaraModel.create({
      name,
      userId,
      imageURL,
      likes: 0,
    });
    return capivara;
  },
  async ListCapivaras(req, res) {
    return CapivaraModel.findAll();
  },
  async DeleteCapivara(req, res) {
    const { id } = req.body;
    const userId = res.locals.user;
    const capivara = await CapivaraModel.findByPk(id);
    if (!capivara) {
      return false;
    }
    if (capivara.userId === Number(userId)) {
      await CapivaraModel.destroy({ where: { id } });
      return capivara;
    } else {
      return false;
    }
  },
  async UpdateCapivara(req, res) {
    const { id, name, imageURL } = req.body;
    const userId = res.locals.user;
    const capivara = await CapivaraModel.findByPk(id);
    if (!capivara) {
      return false;
    }
    if (capivara.userId === Number(userId)) {
      console.log(capivara);
      await CapivaraModel.update({ name, imageURL }, { where: { id: id } });
      const Newcapivara = await CapivaraModel.findByPk(id);
      return Newcapivara;
    } else {
      return false;
    }
  },
};
