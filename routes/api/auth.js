const express = require("express");
const router = express.Router();

const {
  register,
  verify,
  resendVerify,
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
  resentEmailValidate,
} = require("../../middlewares");
const {
  authSchema,
  verifyEmailShema,
  subscriptionShema,
} = require("../../models");

router.post("/register", authValidate(authSchema), register);

router.get("/verify/:verificationToken", verify);

router.post("/verify", resentEmailValidate(verifyEmailShema), resendVerify);

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
