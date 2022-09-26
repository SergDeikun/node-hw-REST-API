const { addSchema } = require("../schemas/contacts");
const { RequestError } = require("../helpers");

const updateValidate = (req) => {
  const { error } = addSchema.validate(req.body);

  if (Object.keys(req.body).length === 0) {
    throw RequestError(400, "missing fields");
  }

  if (error) {
    throw RequestError(400, error.message);
  }
};

module.exports = updateValidate;
