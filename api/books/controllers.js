const Book = require("../../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();

    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBooks };
