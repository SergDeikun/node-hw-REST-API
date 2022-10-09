const { RequestError } = require("../helpers");

const subscriptionValidate = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const { subscription } = req.body;

    if (
      subscription !== "starter" &&
      subscription !== "pro" &&
      subscription !== "business"
    ) {
      throw RequestError(400, "unknown subscription");
    }

    if (error) {
      next(RequestError(400, error.message));
    }

    next();
  };

  return func;
};

module.exports = subscriptionValidate;
