const { User } = require("../../models");

const subscription = async (req, res, next) => {
  try {
    const { id } = req.user;

    const result = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res
      .status(200)
      .json({ email: result.email, subscription: result.subscription });
  } catch (error) {
    next(error);
  }
};

module.exports = subscription;
