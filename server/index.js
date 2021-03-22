const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./db/db-connection");
const port = process.env.PORT;

//middleware()

const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", middleware, (req, res) => {
  res.send("Hello About world");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
