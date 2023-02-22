const mongoose = require("mongoose");

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

userSchema.statics.login = async (email, password) => {
  const exist = await User.findOne({ email });
};

module.exports = mongoose.model("User", userSchema);
