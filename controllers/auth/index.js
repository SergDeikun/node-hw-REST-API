const register = require("./register");
const verify = require("./verify");
const resendVerify = require("./resendVerify");

const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  verify,
  resendVerify,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
};
