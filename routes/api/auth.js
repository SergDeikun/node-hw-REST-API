const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getCurrent,
  logout,
  subscription,
  updateAvatar,
} = require("../../controllers/auth");

const {
  authValidate,
  authenticate,
  subscriptionValidate,
  upload,
} = require("../../middlewares");
const { authSchema, subscriptionShema } = require("../../models");

router.post("/register", authValidate(authSchema), register);

router.post("/login", authValidate(authSchema), login);

router.get("/current", authenticate, getCurrent);

router.get("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

router.patch(
  "/",
  authenticate,
  subscriptionValidate(subscriptionShema),
  subscription
);

module.exports = router;
