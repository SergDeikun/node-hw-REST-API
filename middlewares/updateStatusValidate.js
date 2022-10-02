const { RequestError } = require("../helpers");

const updateStatusValidate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (Object.keys(req.body).length === 0) {
      throw RequestError(400, "missing field favorite");
    }

    if (error) {
      next(RequestError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = updateStatusValidate;
