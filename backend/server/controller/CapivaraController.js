const CapivaraService = require("../../database/service/CapivaraService");

module.exports = {
    async CreateCapivara(req,res){
        const capivara = await CapivaraService.CreateCapivara(req,res);
        res.json(capivara)
    },
    async ListCapivaras(req,res){
        const capivaras = await CapivaraService.ListCapivaras(req,res);
        res.json(capivaras);
    }
}