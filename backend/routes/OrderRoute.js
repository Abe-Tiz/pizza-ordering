const express = require("express");
const router = express.Router();
const {createOrderItem} = require("../controllers/OrderController")

router.post("/", createOrderItem);

module.exports = router;