const express = require("express");
const { createRole } = require("../controllers/RoleController");

const router = express.Router();

router.post("/", createRole);

module.exports = router;
