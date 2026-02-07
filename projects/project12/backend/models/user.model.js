const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 3 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [12, "Email must be at least 12 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false, // do not return password by default
  },
  socketId: {
    type: String,
  },
});

// ✅ Use regular function to access 'this'
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET , {expiresIn: '24h'});
  return token;
};

// ✅ Use regular function for proper 'this' context
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ✅ Hash password (no 'this' needed here)
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// ✅ Export the model
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
