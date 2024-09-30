const { pool } = require("../config/Db");

const addOrderItem = async (name, toppings, price, photo, quantity, status) => {
   console.log("Parameters:", {
     name,
     toppings,
     price,
     photo,
     quantity,
     status,
   });
  if (!Array.isArray(toppings)) {
    toppings = [toppings];
  }
  const newOrder =await pool.query(
    `INSERT INTO "order" (name, toppings, price, photo,quantity,status) VALUES ($1, $2::text[], $3, $4,$5,$6) RETURNING *`,
    [name, toppings, price, photo,quantity,status]
  );

  return newOrder.rows[0];
};

const getOrder = async () => {
  const result = await pool.query(`SELECT * FROM "order"`);
  return result.rows;
};

module.exports = {
  addOrderItem,
  getOrder,
};
