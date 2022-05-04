// user model
// how to link models
// const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 8000;
app.use("/api", userRoutes);

app.get("/", (req, res) => res.send("hello 👀"));

// memories app method for connecting db seems better
// mongoose
//   .connect("mongodb://localhost:27017/test")
//   .then(() => console.log("DB CONNECTED"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECTED"));

app.listen(PORT, () => console.log(`app running on port ${PORT}`));
