// routes/userRoutes.js
const express = require("express");
const { register, getAdmin, loginAdmin } = require("../controllers/userController");


const router = express.Router();

router.get("/admin",  getAdmin);
router.post("/register",  register);
router.post("/login", loginAdmin);

module.exports = router;
