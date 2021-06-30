const CapivaraService = require("../../database/service/CapivaraService");

module.exports = {
    async CreateCapivara(req,res){
        const capivara = await CapivaraService.CreateCapivara(req,res);
        res.json(capivara)
    },
    async ListCapivaras(req,res){
        const capivaras = await CapivaraService.ListCapivaras(req,res);
        res.json(capivaras);
    },
    async DeleteCapivara(req,res){
        const capivara = await CapivaraService.DeleteCapivara(req,res)
        capivara? res.status(202).send() : res.status(403).send()
    }
}