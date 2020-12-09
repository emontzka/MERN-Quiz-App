const mongoose = require("mongoose");

const QaSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  taxonomies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "taxonomy",
    },
  ],
});

module.exports = Qa = mongoose.model("qa", QaSchema);
