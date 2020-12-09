const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

// @route   GET api/taxonomies
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Taxonomy Route"));

// create and update taxonomy

// remove taxonomy

// get all users taxonomies

module.exports = router;
