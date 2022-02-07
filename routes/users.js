const router = require("express").Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const auth = require("../middlewares/auth");

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

// LOGIN A USER
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ pseudo: req.body.pseudo });
    !user && res.status(404).json(`Il n'y a pas d'utilisateur avec ce pseudo.`);

    const validPw = await bcrypt.compare(req.body.password, user.password);
    !validPw && res.status(400).json(`Le mot de passe est incorrect.`);

    const token = jwt.sign({ userId: user._id, userAdmin: user.admin }, process.env.JWT_CODE, { expiresIn: "3d" });

    res.status(200).json({ user: user.pseudo, token });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//
//
//
//
//

// Search query
router.get("/user", auth, async (req, res) => {
  try {
    const user = req.user;
    const found = await User.find({ pseudo: /pierre/ });
    res.status(200).json({found, user});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
