const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { password, email } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email in use");
  }

  const result = await User.create({ password, email });

  res.status(201).json({
    user: {
      email: result.email,
      subscription: "starter",
    },
  });
};

module.exports = register;
