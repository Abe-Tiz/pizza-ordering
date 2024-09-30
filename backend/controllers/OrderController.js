const { addOrderItem } = require("../models/OrderModel");

const createOrderItem = async (req, res) => {
     console.log("Request Body:", req.body); 
  const { name, toppings, price,photo, quantity,status } = req.body;
    if (!name) {
     console.log({ error: "Name is required" })
   return res.status(400).json({ error: "Name is required" });
 }

  try {
    const newOrder =await addOrderItem(name, toppings, price, photo,quantity,status);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
    createOrderItem
}