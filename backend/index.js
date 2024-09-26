
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes
const userRoutes = require("./routes/UserRoute");
const menuRoutes = require("./routes/MenuRoute");

const { checkConnection } = require("./config/Db");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

checkConnection();
// Routes
app.use("/user", userRoutes);
app.use("/menu", menuRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
