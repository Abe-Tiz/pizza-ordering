
const { createUser, getUserByEmail, getAdmins, getCustomerByEmail, createCustomer } = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { z } = require("zod");
const { registerSchema, customerRegisterSchema } = require("../zod/Validation");
const dotenv = require("dotenv");
dotenv.config();

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

// login admin
const loginAdmin = async (req, res) => {
  const {adminName, email, password,phone } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password is not matched!" });
    }
  
    // Check if adminName and phone match
    if (user.adminname !== adminName) {
      return res.status(401).json({ message: "Name is Not Matched!" });
    }
    else if ( user.phone !== phone) {
      return res.status(401).json({ message: "Phone is Not Matched!" });
    }


    // const abilities = defineAbilitiesFor(user);
    
    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // console.log(user);
    return res.status(200).json({ user, token });
     
  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// create customer
const customerRegister = async (req, res) => {
  const { email, password, location, phone } =
    req.body;

  try {
    customerRegisterSchema.parse(req.body);

    const existingUser = await getCustomerByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await createCustomer({
      email,
      password: hashedPassword,
      location,
      phone,
    });
    res.status(201).json({ success: true, user });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ success: false, errors: error.errors });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password} = req.body;

  try {
    const user = await getCustomerByEmail(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password is not matched!" });
    }
    
    // Generate a JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // console.log(user);
    return res.status(200).json({success:"Success", user, token });
     
  } catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  getAdmin,
  loginAdmin,
  customerRegister,
  loginUser,
};
