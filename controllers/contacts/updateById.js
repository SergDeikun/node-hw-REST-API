const { Contact } = require("../../models");

const { RequestError } = require("../../helpers");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!updateContact) {
      throw RequestError(404, "Not found");
    }

    res.status(200).json(updateContact);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
