const mongoose = require("mongoose");
const DB = process.env.DATABASE;

//Database is connected online

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Succesfully Connected to MongoDB Atlas");
  })
  .catch((err) => console.log("No connection"));
