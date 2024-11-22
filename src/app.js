const express = require("express");
const app = express();

const testController = require("./controllers/testController");

app.use("/api/health-check", (req, res) => {
  return res.status(200).json({ message: "Service running..." });
});

app.use("api/test", testController);

module.exports = app;
