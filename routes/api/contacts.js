const express = require("express");
const router = express.Router();

const { addSchema } = require("../../schemas/contacts.js");
const { addValidate, updateValidate } = require("../../middlewares/");

const ctrl = require("../../controllers/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", addValidate(addSchema), ctrl.add);

router.delete("/:contactId", ctrl.removeById);

router.put("/:contactId", updateValidate(addSchema), ctrl.updateById);

module.exports = router;
