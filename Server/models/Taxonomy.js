const mongoose = require("mongoose");

const TaxSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  taxonomy: String,
});

module.exports = Taxonomy = mongoose.model("taxonomy", TaxSchema);
