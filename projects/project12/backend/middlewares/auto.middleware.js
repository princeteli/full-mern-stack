const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const userModel = require("../models/user.model");
const captainModel = require("../models/captain.model");

// 🔁 Shared: Extract and verify token
async function verifyToken(req) {
  const authHeader = req.headers.authorization;
  const token = req.cookies.token || (authHeader && authHeader.split(" ")[1]);

  if (!token) throw new Error("No token provided");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // Check blacklist
  const blacklisted = await blacklistTokenModel.findOne({ token });
  if (blacklisted) throw new Error("Token blacklisted");

  return { token, decoded };
}

// 👤 Middleware: Auth for normal users
const authUser = async (req, res, next) => {
  try {
    const { decoded } = await verifyToken(req);

    const user = await userModel.findById(decoded._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.error("authUser error:", err.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

// 🚗 Middleware: Auth for captains
const authCaptain = async (req, res, next) => {
  try {
    const { decoded } = await verifyToken(req);

    const captain = await captainModel.findById(decoded._id);
    if (!captain) return res.status(404).json({ message: "Captain not found" });

    req.user = captain;
    next();
  } catch (err) {
    console.error("authCaptain error:", err.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { authUser, authCaptain };
