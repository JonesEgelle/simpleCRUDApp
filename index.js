const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productRoute = require("./routes/products.route.js");

require("dotenv").config();

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Update ");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => console.error("Database connection failed!", error));
