const express = require("express");
const router = express.Router();

// @route   GET api/qa
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("QA Route"));

module.exports = router;
