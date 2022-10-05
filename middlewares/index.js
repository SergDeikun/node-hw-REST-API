const addValidate = require("./addValidate");
const updateValidate = require("./updateValidate");
const updateStatusValidate = require("./updateStatusValidate");
const handleSaveErrors = require("./handleSaveErrors");
const isValidId = require("./isValidId");
const authValidate = require("./authValidate");

module.exports = {
  addValidate,
  updateValidate,
  updateStatusValidate,
  handleSaveErrors,
  isValidId,
  authValidate,
};
