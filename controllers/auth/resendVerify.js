const { User } = require("../../models");

const { RequestError } = require("../../helpers");
const { createVerifyEmail, sendEmail } = require("../../helpers");

const resendVerify = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw RequestError(400, "Email not found");
    }

    if (user.verificationToken === "") {
      throw RequestError(400, "Verification has already been passed");
    }

    const mail = createVerifyEmail(email, user.verificationToken);
    await sendEmail(mail);

    res.status(200).json({
      message: "Verification email sent",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = resendVerify;
