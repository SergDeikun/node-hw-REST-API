const addValidate = require("./addValidate");
const updateValidate = require("./updateValidate");
const updateStatusValidate = require("./updateStatusValidate");
const handleSaveErrors = require("../helpers/handleSaveErrors");
const isValidId = require("./isValidId");
const authValidate = require("./authValidate");
const authenticate = require("./authenticate");

module.exports = {
  addValidate,
  updateValidate,
  updateStatusValidate,
  handleSaveErrors,
  isValidId,
  authValidate,
  authenticate,
};
