require("dotenv").config();
const express = require("express");
const Connection = require("./config/db");
Connection()
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("hiii");
});

module.exports = app;
