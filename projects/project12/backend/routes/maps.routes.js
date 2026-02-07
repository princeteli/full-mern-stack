const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auto.middleware");
const mapController = require("../controllers/maps.controller");
const { query } = require("express-validator");

router.get(
  "/get-Coordinates",
  query("address").isString().isLength({ min: 3 }),
  authMiddleware.authUser,
  mapController.getCoordinates
);

module.exports = router;
