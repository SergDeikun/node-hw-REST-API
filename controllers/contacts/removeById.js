const contacts = require("../../models/contacts");

const removeById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const removeContact = await contacts.removeContact(contactId);

    if (!removeContact) {
      res.status(404).json({ message: "Not found" });
    }

    res.status(200).json({ message: "contact deleted" });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
