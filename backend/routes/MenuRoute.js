const express = require("express");
const { createMenuItem } = require("../controllers/MenuController");
const upload = require("../uploads/Upload");
const router = express.Router();

router.post("/", upload.single("photo"), createMenuItem);


module.exports = router;