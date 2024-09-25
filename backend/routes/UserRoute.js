// routes/userRoutes.js
const express = require("express");
const { register, getAdmin } = require("../controllers/userController");


const router = express.Router();

router.get("/admin",  getAdmin);
router.post("/register",  register);

module.exports = router;
