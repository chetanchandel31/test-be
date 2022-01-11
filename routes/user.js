const express = require("express");
const { getUser } = require("../controllers/user");

const Router = express.Router();

Router.get("/user", getUser);

module.exports = Router;
