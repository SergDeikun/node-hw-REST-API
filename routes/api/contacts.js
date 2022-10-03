const express = require("express");
const router = express.Router();

const { addSchema, updateStatusSchema } = require("../../models");

const {
  addValidate,
  updateValidate,
  updateStatusValidate,
  isValidId,
} = require("../../middlewares/");

const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContact,
} = require("../../controllers/contacts");

router.get("/", getAll);

router.get("/:contactId", isValidId, getById);

router.post("/", addValidate(addSchema), add);

router.delete("/:contactId", isValidId, removeById);

router.put("/:contactId", isValidId, updateValidate(addSchema), updateById);

router.patch(
  "/:contactId/favorite",
  isValidId,
  updateStatusValidate(updateStatusSchema),
  updateStatusContact
);

module.exports = router;
