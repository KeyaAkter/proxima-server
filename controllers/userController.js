const User = require("../models/userModel");

// login user
const loginUser = async (req, res) => {
  res.json({ message: "login" });
};

// signup user
const signupUser = async (req, res) => {
  res.json({ message: "signup" });
};

module.exports = { loginUser, signupUser };
