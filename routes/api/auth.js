const express = require("express");
const router = express.Router();

const { register } = require("../../controllers/auth");
const { login } = require("../../controllers/auth");

const { authValidate } = require("../../middlewares");
const { authSchema } = require("../../models");

router.post("/register", authValidate(authSchema), register);

router.post("/login", authValidate(authSchema), login);

module.exports = router;
//
