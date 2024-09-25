// models/UserModel.js
const {pool} = require("../config/Db");

const createUser = async (userData) => {
  const { adminName, email, password, restaurantName, location, phone, logo } =
    userData;

  const result = await pool.query(
    "INSERT INTO users (adminName, email, password, restaurantName, location, phone, logo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [adminName, email, password, restaurantName, location, phone, logo]
  );

  return result.rows[0];
};

const getUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

// get all admin 
const getAdmins = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

// login
const loginAdmin = async (email,password) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};


module.exports = { createUser, getUserByEmail, getAdmins };
