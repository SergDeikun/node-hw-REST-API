const { User } = require("./user");
const { authSchema } = require("./user");

const { Contact } = require("./contact");
const { addSchema } = require("./contact");
const { updateStatusSchema } = require("./contact");

module.exports = {
  User,
  authSchema,
  Contact,
  addSchema,
  updateStatusSchema,
};
