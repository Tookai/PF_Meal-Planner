const router = require("express").Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER A USER
router.post("/register", async (req, res) => {
  try {
    // Generate hashed password for security
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);

    // create new user
    const newUser = new User({
      pseudo: req.body.pseudo,
      password: hashedPw,
    });

    // save user and respond
    await newUser.save();
    res.status(200).json(`User ${req.body.pseudo} created.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
