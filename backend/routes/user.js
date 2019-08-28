//user.js

const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", (req, res) => {
  // console.log("-------------===========--------> ", req.body);
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
      });
      newUser.save().then(user => {
        res.json(user);
      });
    }
  });
});

module.exports = router;
