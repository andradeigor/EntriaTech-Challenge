const CapivaraService = require("../../database/service/CapivaraService");

module.exports = {
    async CreateCapivara(req,res){
        const capivara = await CapivaraService.CreateCapivara(req,res);
        res.json(capivara)
    }

}