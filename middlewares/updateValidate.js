const { RequestError } = require("../helpers");

const updateValidate = (addSchema) => {
  const func = (req, res, next) => {
    const { error } = addSchema.validate(req.body);

    if (Object.keys(req.body).length === 0) {
      throw RequestError(400, "missing fields");
    }

    if (error) {
      next(RequestError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = updateValidate;
