const bcrypt = require("bcryptjs");

const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      throw RequestError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ password: hashPassword, email });

    res.status(201).json({
      user: {
        email: result.email,
        subscription: "starter",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
