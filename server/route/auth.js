const express = require("express");
const router = express.Router();
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
  const { name, email, phone, work, password, confirmPassword } = req.body;
  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "plz fill data" });
  }

  try {
    const userPrsesnt = await User.findOne({ email: email });
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
    const userRegistered = await user.save();

    res.status(201).json({ message: "user registered" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
