const contacts = require("../../models/contacts");
const { addValidate } = require("../../middlewares");

const add = async (req, res, next) => {
  try {
    addValidate(req, res);

    const newContact = await contacts.addContact(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
