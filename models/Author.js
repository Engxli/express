const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  gender: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

module.exports = mongoose.model("Author", AuthorSchema);
