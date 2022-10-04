const express = require("express");
const router = express.Router();

const { register } = require("../../controllers/auth");

const { registerValidate } = require("../../middlewares");
const { registerSchema } = require("../../models");

router.post("/register", registerValidate(registerSchema), register);
// router.post("/login", addValidate(addSchema));

module.exports = router;
