const express = require("express");
const mongoose = require("mongoose");
const app = express();

const productRoute = require("./routes/products.route.js");

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Update ");
});

mongoose
  .connect(
    "mongodb+srv://egellejones_db_user:Va1x3ltz0VZdFfXt@backenddb.48zefpd.mongodb.net/?appName=BackendDB",
  )
  .then(() => {
    console.log("Database connected!");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Database connection failed!"));
