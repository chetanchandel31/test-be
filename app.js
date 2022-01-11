// user model
// how to link models
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = 8000; // change to process.env etc

const admin = (req, res) => {
  return res.send("hi from admin.");
};

const middleware = (req, res, next) => {
  console.log("middleware ran");
  next();
};

app.get("/admin", middleware, admin);

// memories app method for connecting db seems better
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("DB CONNECTED"));

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
