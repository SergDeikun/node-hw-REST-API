const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

const { authValidate, authenticate } = require("../../middlewares");
const { authSchema } = require("../../models");

router.post("/register", authValidate(authSchema), register);

router.post("/login", authValidate(authSchema), login);

router.get("/current", authenticate, getCurrent);

router.get("/logout", authenticate, logout);

module.exports = router;
