const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
});

//Now we are creating collection
//USER is the name of collection which we want to create in database
//userSchema is the structure of document which will be stored in database.
//We have defined userSchema above

const User = mongoose.model("USER", userSchema);

module.exports = User;
