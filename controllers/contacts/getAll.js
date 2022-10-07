const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;

    const result = await Contact.find({ owner }, "", { skip, limit });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
