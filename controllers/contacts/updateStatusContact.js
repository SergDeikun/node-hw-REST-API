const { Contact } = require("../../models");

const { RequestError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const updateStatus = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!updateStatus) {
      throw RequestError(404, "Not found");
    }

    res.status(200).json(updateStatus);
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
