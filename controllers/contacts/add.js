const contacts = require("../../models/contacts");

const add = async (req, res, next) => {
  try {
    const newContact = await contacts.addContact(req.body);

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
