const db = require("../config/db");
const sequelize = require("sequelize");

module.exports = db.define(
  "user",
  {
    firstName: sequelize.STRING,
    lastName: sequelize.STRING,
    password: sequelize.STRING,
    email: sequelize.STRING,
    isAdmin: {
      type:sequelize.BOOLEAN,
      defaultValue: false,
    }
  },
);
