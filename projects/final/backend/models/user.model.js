const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [4, "first name less than 4 "],
    },
    lastname: {
      type: String,
      minlength: [4, "last name less than 4 "],
    },
  },
  email:{
    type:String,
    required:true,
    unique:true,
    minlength:[13,'Email less than 13']
  },
  password:{
    type:String,
    required:true,
  },
  socketId:{
    type:String
  }
});
