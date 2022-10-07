const express = require("express");
const router = express.Router();

const { addSchema, updateStatusSchema } = require("../../models");

const {
  addValidate,
  updateValidate,
  updateStatusValidate,
  isValidId,
  authenticate,
} = require("../../middlewares/");

const {
  getAll,
  getById,
  add,
  updateById,
  removeById,
  updateStatusContact,
} = require("../../controllers/contacts");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, addValidate(addSchema), add);

router.delete("/:contactId", authenticate, isValidId, removeById);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  updateValidate(addSchema),
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  updateStatusValidate(updateStatusSchema),
  updateStatusContact
);

module.exports = router;
