const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const { body, validationResult } = require("express-validator");

const Qa = require("../../models/Qa");
const User = require("../../models/User");

//get all qas by user,
// @route   GET api/qa
// @desc    get all qas
// @access  Private
router.get("/", auth, async (req, res) => {
  const qas = await Qa.find({ user: req.user.id });
  res.json(qas);
});

// @route   POST api/qa
// @desc    Add/Update QA
// @access  Private

router.post(
  "/",
  [auth, [body("question", "Question is required").not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { question, answer, taxonomies } = req.body;
    console.log(req.user);

    try {
      let qa = new Qa();
      if (answer) qa.answer = answer;
      if (question) qa.question = question;
      if (taxonomies) qa.taxonomies = taxonomies;
      qa.user = req.user.id;
      await qa.save();
      await res.json(qa);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//delete qa

//add pause to date (phase two)

module.exports = router;
