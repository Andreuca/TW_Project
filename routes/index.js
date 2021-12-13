const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const dbRouter = require("./db");

router.use("/user", userRouter);
router.use("/", dbRouter);

module.exports = router;
