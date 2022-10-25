const addValidate = require("./addValidate");
const updateValidate = require("./updateValidate");
const updateStatusValidate = require("./updateStatusValidate");
const handleSaveErrors = require("../helpers/handleSaveErrors");
const isValidId = require("./isValidId");
const authValidate = require("./authValidate");
const authenticate = require("./authenticate");
const subscriptionValidate = require("./subscriptionValidate");
const upload = require("./upload");
const resentEmailValidate = require("./resentEmailValidate");

module.exports = {
  addValidate,
  updateValidate,
  updateStatusValidate,
  handleSaveErrors,
  isValidId,
  authValidate,
  authenticate,
  subscriptionValidate,
  upload,
  resentEmailValidate,
};
