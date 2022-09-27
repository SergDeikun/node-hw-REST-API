const { addSchema } = require("../schemas/contacts");
const { RequestError } = require("../helpers");

const addValidate = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name) {
    return res.status(400).json({ message: "missing required name field" });
  }

  if (!email) {
    return res.status(400).json({ message: "missing required email field" });
  }

  if (!phone) {
    return res.status(400).json({ message: "missing required phone field" });
  }

  const { error } = addSchema.validate(req.body);

  if (error) {
    throw RequestError(400, error.message);
  }
};

module.exports = addValidate;
