const { RequestError } = require("../helpers");

const resentEmailValidate = (schema) => {
  const func = (req, res, next) => {
    const { email } = req.body;

    if (!email) {
      throw RequestError(400, "missing required email field");
    }

    const { error } = schema.validate(req.body);

    if (error) {
      next(RequestError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = resentEmailValidate;
