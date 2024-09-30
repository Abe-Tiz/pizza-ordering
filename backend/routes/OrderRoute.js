const express = require("express");
const router = express.Router();
const {createOrderItem, displayOrder} = require("../controllers/OrderController")

router.post("/", createOrderItem);
router.get("/get-order", displayOrder);

module.exports = router;