const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // The token will be valid for 30 days.
  });
};

// @desc    Register a new user
const registerUser = async (req, res) => {
  try {
    // 1. Destructure the name, email, and password from the request body.
    const { name, email, password } = req.body;

    // 2. Basic Validation: Check if all required fields were provided.
    if (!name || !email || !password) {
      res.status(400); // 400 Bad Request
      throw new Error("Please add all fields");
    }

    // 3. Check if the user already exists in the database.

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400); // 400 Bad Request
      throw new Error("User already exists");
    }

    // 4. If the user doesn't exist, create a new user.

    const user = await User.create({
      name,
      email,
      password,
    });

    // 5. If the user was created successfully, send a response.
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id), // Generate a token for the new user
      });
    } else {
      res.status(400); // 400 Bad Request
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(res.statusCode || 500).json({ message: error.message });
  }
};

// ====================================================================================
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(res.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,loginUser
};
