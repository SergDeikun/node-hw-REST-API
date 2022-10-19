const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const { RequestError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tmpUpload, originalname } = req.file;

    const extentention = originalname.split(".").pop();
    const filename = `${_id}.${extentention}`;

    const resultUpload = path.join(avatarsDir, filename);

    Jimp.read(tmpUpload, (err, avatar) => {
      if (err) throw RequestError(401, "Not authorized");
      avatar.resize(250, 250).write(resultUpload);
    });

    const avatarURL = path.join("avatars", filename);

    await User.findByIdAndUpdate(_id, { avatarURL });

    res.status(200).json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
