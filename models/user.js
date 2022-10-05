const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../middlewares");

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

userSchema.post("save", handleSaveErrors);

const authSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

// const loginSchema = Joi.object({
//   password: Joi.string().required(),
//   email: Joi.string().email().required(),
// });

const User = model("user", userSchema);

module.exports = {
  User,
  authSchema,
  // loginSchema,
};
