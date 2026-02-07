const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// 🔐 Register Route
router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("email").trim().isEmail().isLength({ min: 13 }),
  body("password").trim().isLength({ min: 5 }), 
  body("username").trim().isLength({ min: 3 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(400)
        .json({ error: error.array(), message: "Invalid Data" });
    }

    const { email, password, username } = req.body;

    // ✅ Hash the password as-is (do not change the case)
    const hashPassword = await bcrypt.hash(password, 10);

    // ✅ Store username in lowercase for consistency
    const newUser = await userModel.create({
      email,
      password: hashPassword,
      username: username.toLowerCase(),
    });

    res.json({ message: "User registered successfully", user: newUser });
  }
);



// 🔐 Login Route
router.get("/login", (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  body("username").trim().isLength({ min: 3 }),
  body("password").trim().isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res
        .status(400)
        .json({ error: error.array(), message: "Invalid Data" });
    }

    const { username, password } = req.body;

    // ✅ Lookup username in lowercase
    const user = await userModel.findOne({ username: username.toLowerCase() });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Username And Password",
      });
    }

    // ✅ DEBUG LOGS (keep for development)
    console.log("---- LOGIN DEBUG ----");
    console.log("Entered password:", password);
    console.log("Stored hashed password:", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    console.log("---- DEBUG END ----");

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Username And Password",
      });
    }

    // ✅ Generate JWT Token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // ✅ Set cookie
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ message: "Login successful"});
  }
);

module.exports = router;
