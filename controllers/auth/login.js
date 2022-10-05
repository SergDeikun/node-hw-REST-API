const bcrypt = require("bcryptjs");

const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw RequestError(401, "Email or password is wrong");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      throw RequestError(401, "Email or password is wrong");
    }

    const token = "dbfhj345kjhjks";

    res.json({
      token,
      user: {
        email: user.email, // ? як правильно писфти - email чи user.email
        subscription: "starter",
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
