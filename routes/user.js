const express = require("express");
const { getUser, createUser } = require("../controllers/user");

const Router = express.Router();

Router.get("/user", getUser);

Router.post("/user", createUser);

module.exports = Router;
