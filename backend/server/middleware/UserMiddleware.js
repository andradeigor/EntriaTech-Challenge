const Joi = require("joi");

module.exports = {
  async CreateUser(req, res, next) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
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
