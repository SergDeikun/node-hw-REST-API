const { Contact } = require("../../models");

const add = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const newContact = await Contact.create({ ...req.body, owner });

    res.status(201).json(newContact);
  } catch (error) {
    next(error);
  }
};

module.exports = add;
