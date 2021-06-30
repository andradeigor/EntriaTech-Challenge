const CapivaraModel = require("../models/CapivaraModel");

module.exports = {
    async CreateCapivara(req,res) {
        const { name, imageURL } = req.body
        const capivara = CapivaraModel.create({
            name,imageURL,likes: 0
        })
        return capivara
    }
}