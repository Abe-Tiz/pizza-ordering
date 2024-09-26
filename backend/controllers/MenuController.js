
const { addMenuItem } = require("../models/menuModel");

// create menu item
const createMenuItem = async (req, res) => {
  const { name, toppings, price } = req.body;
  const photo = req.file ? req.file.path : null;  

  try {
    const newMenu = await addMenuItem(name, toppings, price, photo);
    res.status(201).json(newMenu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createMenuItem,
};
