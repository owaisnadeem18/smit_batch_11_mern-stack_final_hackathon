const jwt = require("jsonwebtoken");
const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role: role }, 
    process.env.JWT_SECRET_KEY,
    { expiresIn: "10h" } 
  );
};

module.exports = generateToken;
