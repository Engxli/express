const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  image: String,
  price: Number,
});

module.exports = mongoose.model("Book", BookSchema);
