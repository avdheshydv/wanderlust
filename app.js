const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Database connection failed:", error.message);
  }
}

connectDB();


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
