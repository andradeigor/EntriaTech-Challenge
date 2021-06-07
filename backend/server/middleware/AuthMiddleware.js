const Joi = require("joi");
const UtilsJwt = require("../utils/UtilsJwt");
module.exports = {
  async TokenMiddleware(req, res, next) {
    if (!req.headers.authorization) {
      res.status(400).json({ error: "no token provide" });
    }
    try {
      const [, token] = req.headers.authorization.split(" ");
      const Id = await UtilsJwt.decript(token);
      res.locals.user = Id;
      next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async LoginUser(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });
    const options = {
      abortEarly: false,
    };
    const { error } = schema.validate(req.body, options);
    if (error) {
      res.status(400).json({
        error: `Validation error: ${error.details
          .map((error) => error.message)
          .join(", ")}`,
      });
    } else {
      next();
    }
  },
};
