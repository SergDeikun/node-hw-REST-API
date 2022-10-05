const { User } = require("./user");
const { authSchema } = require("./user");

// const { registerSchema } = require("./user");
// const { loginSchema } = require("./user");

const { Contact } = require("./contact");
const { addSchema } = require("./contact");
const { updateStatusSchema } = require("./contact");

module.exports = {
  User,
  authSchema,
  // registerSchema,
  // loginSchema,
  Contact,
  addSchema,
  updateStatusSchema,
};
