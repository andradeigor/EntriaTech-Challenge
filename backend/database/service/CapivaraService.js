const CapivaraModel = require("../models/CapivaraModel");

module.exports = {
    async CreateCapivara(req,res) {
        const { name, imageURL } = req.body
        const userId = res.locals.user
        const capivara = await CapivaraModel.create({
            name,userId,imageURL,likes: 0
        })
        return capivara
    }
}