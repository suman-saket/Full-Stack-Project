const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });

require("./db/db-connection");

app.use(express.json());
app.use(cookieParser());
app.use(require("./route/auth.js"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
