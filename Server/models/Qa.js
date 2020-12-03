const mongoose = require("mongoose");

const QaSchema = new mongoose.Schema({
  qa: {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});
