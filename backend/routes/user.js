//user.js

const express = require("express");
const router = express.Router();
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const User = require("../models/User");

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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

router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }).then(userExist => {
    if (!userExist) {
      res.status(400).json({
        username_password: "incorrect username or password"
      });
    }
    console.log("outside if");

    res.json(userExist);
  });
});
module.exports = router;
