const { User } = require("./user");
const { registerSchema } = require("./user");
// const { loginSchema } = require("./user");

const { Contact } = require("./contact");
const { addSchema } = require("./contact");
const { updateStatusSchema } = require("./contact");

module.exports = {
  User,
  registerSchema,
  Contact,
  addSchema,
  updateStatusSchema,
};
