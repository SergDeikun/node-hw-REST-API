const { Contact } = require("../../models");

const add = async (req, res, next) => {
  try {
    const newContact = await Contact.create(req.body);
    console.log(newContact);

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
