const userController = require("./user");
const dbController = require("./db");

const controllers = {
  user: userController,
  db: dbController,
};

module.exports = controllers;
