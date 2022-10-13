const { Contact } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    console.log(owner);
    const { page = 1, limit = 20, favorite } = req.query;
    console.log(favorite);

    const skip = (page - 1) * limit;

    const filter = favorite === undefined ? owner : { owner, favorite };

    const result = await Contact.find(filter, "-__v", {
      skip,
      limit,
    });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
