const db = require("../config/db");

const controller = {
  reset: async (req, res) => {
    db
      .sync({ alter: true })
      .then(() => {
        res.status(201).send({
          message: "Database reset",
        });
      })
      .catch(() => {
        res.status(500).send({
          message: "Database reset error",
        });
      });
  },
};

module.exports = controller;
