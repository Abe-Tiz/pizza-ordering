const { pool } = require("../config/Db");

const addMenuItem = async (name, toppings, price, photo) => {
  if (!Array.isArray(toppings)) {
    toppings = [toppings];
  }

  const newMenu = await pool.query(
    "INSERT INTO menu (name, toppings, price, photo) VALUES ($1, $2::text[], $3, $4) RETURNING *",
    [name, toppings, price, photo]  
  );

  return newMenu.rows[0];
};

module.exports = {
  addMenuItem,
};
