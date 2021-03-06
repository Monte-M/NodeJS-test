const joi = require('joi');

// eslint-disable-next-line consistent-return
async function validateRegister(req, res, next) {
  const schema = joi.object({
    full_name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    password2: joi.string().min(6).required().valid(joi.ref('password')),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.warn(error);
    res.status(400).send({
      error: error.details.map((e) => ({
        errorMsg: e.message,
        field: e.context.key,
      })),
    });
    return false;
  }
}

async function validateLogin(req, res, next) {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  });
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.warn(error);
    res.status(400).send({
      error: error.details.map((e) => ({
        errorMsg: e.message,
        field: e.context.key,
      })),
    });
    return false;
  }
}

module.exports = {
  validateRegister,
  validateLogin,
};
