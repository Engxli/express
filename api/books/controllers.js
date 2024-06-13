const Author = require("../../models/Author");
const Book = require("../../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find().populate({
      path: "author",
      select: "_id name dob",
    });
    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.files) {
      req.body.images = req.files.map((file) => {
        return file.path;
      });
    }
    const book = await Book.create(req.body);

    await Author.findByIdAndUpdate(req.body.author, {
      $push: {
        books: book,
      },
    });

    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const book = await Book.findById(id);
    await Author.findByIdAndUpdate(book.author, { $pull: { books: book._id } });
    await book.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBooks, createBook, deleteBook };
