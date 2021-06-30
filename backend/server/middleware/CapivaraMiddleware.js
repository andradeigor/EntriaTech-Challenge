const Joi = require("joi")
module.exports = {
    async CreateCapivara(req,res,next){
        const schema = Joi.object({
            name: Joi.string().min(3).required(),
            imageURL: Joi.string().min(10).required()
        })
        const options = {
            abortEarly: false,
        }
        const {error} = schema.validate(req.body, options)

        if (error) {
            res.status(400).json({
              error: `Validation error: ${error.details
                .map((error) => error.message)
                .join(", ")}`,
            });
          } else {
            next();
          }
    }

}