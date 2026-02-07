const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 5 characters long"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be at least 5 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
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
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "color must be at least 3 characters long "],
    },
    plate: {
      type: String,
      required: true,
      minlength: [6, "plate must be at least 6 characters"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "capacity must be at least 1"],
    },

    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
      
    },
    lon: {
      type: Number,
     
    }
  },
});

// ✅ Use regular function to access 'this'
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return token;
};

// ✅ Use regular function for proper 'this' context
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


// ✅ Hash password (no 'this' needed here)
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// ✅ Export the model
const captainModel = mongoose.model("Captain", captainSchema);
module.exports = captainModel;
