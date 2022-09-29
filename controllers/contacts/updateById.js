const contacts = require("../../models/contacts");

const { RequestError } = require("../../helpers");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateContact = await contacts.updateContact(contactId, req.body);

    if (!updateContact) {
      throw RequestError(404, "Not found");
    }

    res.status(200).json(updateContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
