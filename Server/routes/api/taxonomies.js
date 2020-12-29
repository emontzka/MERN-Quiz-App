const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const Taxonomy = require("../../models/Taxonomy");

//get all qas by user,
// @route   GET api/taxonomies
// @desc    get all taxonomies
// @access  Private
router.get("/", auth, async (req, res) => {
  const taxonomies = await Taxonomy.find({ user: req.user.id });
  res.json(taxonomies);
});

// create taxonomy
// @route   POST api/taxonomies
// @desc    Create Taxonomy
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    let taxonomy = new Taxonomy();
    taxonomy.name = req.body.name;
    taxonomy.user = req.user.id;
    await taxonomy.save();
    res.json(taxonomy);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// get all taxonomies

// update taxonomy

//add taxonomy to qa

// remove taxonomy from qa

// delete taxonomy

// get all users taxonomies

module.exports = router;
