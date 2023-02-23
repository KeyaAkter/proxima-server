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
      "Password isn't strong, try to combine uppercase, lowercase, number and symbol and remember that pass must be atleast 8 characters "
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

module.exports = mongoose.model("User", userSchema);
