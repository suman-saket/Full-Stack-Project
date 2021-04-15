const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../db/db-connection");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world");
});

// router.get("/about", middleware, (req, res) => {
//   res.send("Hello About world");
// });

//Route to save data posted by user in database using promise syntax
/*
router.post("/register", (req, res) => {
  //object destructuirng
  const { name, email, phone, work, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "plz fill data" });
  }
  User.findOne({ email: email })
    .then((userPrsesnt) => {
      if (userPrsesnt) {
        return res
          .status(400)
          .json({ error: "Email already prsesnt ,Enter new email" });
      }
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirmPassword,
      });
      user
        .save()
        .then(() => {
          res.status(201).json({ message: "user registered" });
        })
        .catch((err) => res.status(500).json({ error: "Registartion failed" }));
    })
    .catch((err) => {
      console.log(err);
    });
});
*/

//Route to save data posted by user in database using async await syntax

router.post("/register", async (req, res) => {
  //object destructuirng
  const { name, email, phone, work, password, confirmpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmpassword) {
    return res.status(422).json({ error: "plz fill data" });
  }

  try {
    const userPrsesnt = await User.findOne({ email: email });
    if (userPrsesnt) {
      return res
        .status(400)
        .json({ error: "Email already prsesnt ,Enter new email" });
    } else if (password != confirmpassword) {
      return res.status(400).json({ error: "passowrd did not match" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirmpassword,
      });

      const userRegistered = await user.save();

      res.status(201).json({ message: "user registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

//Routes for login a user

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "please fill the details" });
    }

    const userPresent = await User.findOne({
      email: email,
    });

    if (userPresent) {
      const isPasswordMatch = await bcrypt.compare(
        password,
        userPresent.password
      );

      token = await userPresent.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isPasswordMatch) {
        res.status(400).json({ error: "Invalid Credentials" });
      } else {
        res.status(200).json({ message: "Succesfully loggedIn" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
