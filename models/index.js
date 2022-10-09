const { User } = require("./user");
const { authSchema } = require("./user");
const { subscriptionShema } = require("./user");

const { Contact } = require("./contact");
const { addSchema } = require("./contact");
const { updateStatusSchema } = require("./contact");

module.exports = {
  User,
  authSchema,
  subscriptionShema,
  Contact,
  addSchema,
  updateStatusSchema,
};
