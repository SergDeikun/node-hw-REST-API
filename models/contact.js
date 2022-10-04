const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../middlewares");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  // TODO потрібно додати
  // owner: {
  //   type: SchemaTypes.ObjectId,
  //   ref: "user",
  // },
});

contactSchema.post("save", handleSaveErrors);

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});

const updateStatusSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  addSchema,
  updateStatusSchema,
};
