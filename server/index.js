const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

require("./db/db-connection");

app.use(express.json());
app.use(require("./route/auth.js"));

const port = process.env.PORT;

//middleware()

const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
