const router = require("express").Router();
const userCtrl = require("../controllers/user");

const isAdmin = require("../middlewares/auth");

// REGISTER A USER
router.post("/register", userCtrl.register);

// LOGIN A USER
router.post("/login", userCtrl.login);

//
//
//
//
//
//
//

// Search query
const User = require("../models/User");
//
router.get("/user", isAdmin, async (req, res) => {
  try {
    const user = req.user;
    const found = await User.find({ pseudo: /pierre/ });
    res.status(200).json({ found, user });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
