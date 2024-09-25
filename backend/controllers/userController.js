
const { createUser, getUserByEmail, getAdmins } = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { registerSchema } = require("../zod/Validation");

const register = async (req, res) => {
  const { adminName, email, password, restaurantName, location, phone, logo } =
    req.body;

  try {
    registerSchema.parse(req.body);
     
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await createUser({
      adminName,
      email,
      password: hashedPassword,
      restaurantName,
      location,
      phone,
      logo,
    });

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
   
    res.status(201).json({ success: true, token, user });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const getAdmin = async (req, res) => {
  try {
    const admins = await getAdmins();
    // console.log(admins);
    res.status(200).json(admins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { register, getAdmin };
