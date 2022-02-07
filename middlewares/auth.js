const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_CODE, (err, user) => {
        if (err) res.status(403).json("Token is not valid!");
        if (user.userAdmin === false) res.status(405).json(`Vous n'avez pas les droits d'admin`);
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
