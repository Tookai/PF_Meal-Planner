const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ pseudo: req.body.pseudo });
    !user && res.status(404).json(`Il n'y a pas d'utilisateur avec ce pseudo.`);

    const validPw = await bcrypt.compare(req.body.password, user.password);
    !validPw && res.status(400).json(`Le mot de passe est incorrect.`);

    const token = jwt.sign({ userId: user._id, pseudo: user.pseudo, userAdmin: user.admin }, process.env.JWT_CODE, { expiresIn: "3d" });

    res.status(200).json({ pseudo: user.pseudo, token });
  } catch (err) {
    res.status(500).json(err);
  }
};
