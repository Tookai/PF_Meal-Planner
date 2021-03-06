const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_CODE, (err, user) => {
        if (err) res.status(403).json(`Le token est invalide.`);
        if (user.userAdmin === false) res.status(405).json(`Vous n'avez pas les droits d'admin.`);
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json(`Vous n'êtes pas authentifié.`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const isLogged = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (token) {
      jwt.verify(token, process.env.JWT_CODE, (err, user) => {
        if (err) res.status(403).json(`Le token est invalide.`);
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json(`Vous n'êtes pas authentifié.`);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = isAdmin;
module.exports = isLogged;
