const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  // check the email validation
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  // check strong passsword
  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Your password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one symbol. Please try again with a stronger password."
    );
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used!");
  }

  // encrypt password or hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create an user
  const user = await this.create({
    email,
    password: hash,
  });

  return user;
};

// static login method

userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email!");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password!");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
