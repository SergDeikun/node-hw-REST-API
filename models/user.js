const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

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
  avatarURL: String,
});

userSchema.post("save", handleSaveErrors);

const authSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const subscriptionShema = Joi.object({
  subscription: Joi.string().required().allow("starter", "pro", "business"),
});

const User = model("user", userSchema);

module.exports = {
  User,
  authSchema,
  subscriptionShema,
};
