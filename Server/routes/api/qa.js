const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const { body, validationResult } = require("express-validator");

const Qa = require("../../models/Qa");
const User = require("../../models/User");

// @route   GET api/qa
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("QA Route"));

//get all qas by user,

// @route   POST api/qa
// @desc    Add/Update QA
// @access  Private

router.post(
  "/",
  [auth, [body("question", "Question is required").not().isEmpty()]],
  //   [auth],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { question, answer, taxonomies } = req.body;
    //build qa object
    const qaFields = {};
    qaFields.question = question;
    if (answer) qaFields.answer = answer;
    if (taxonomies) qaFields.taxonomies = taxonomies;

    try {
      let qa = await Qa.findOneAndUpdate(
        { user: req.user.id },
        { $set: qaFields },
        { new: true, upsert: true }
      );

      res.json(qa);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//delete qa

//update qa

//add pause to date (phase two)

module.exports = router;
