const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

// @route   GET api/taxonomies
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Taxonomy Route"));

// create taxonomy

// get all taxonomies

// update taxonomy

//add taxonomy to qa

// remove taxonomy from qa

// delete taxonomy

// get all users taxonomies

module.exports = router;
