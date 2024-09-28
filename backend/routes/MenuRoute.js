const express = require("express");
const { createMenuItem, displayMenu } = require("../controllers/MenuController");
const upload = require("../uploads/Upload");
const router = express.Router();

router.get("/get-menu", displayMenu);
router.post("/", upload.single("photo"), createMenuItem);


module.exports = router;