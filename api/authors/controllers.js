const Author = require("../../models/Author");
const Book = require("../../models/Book");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    //
    const author = await Author.create(req.body);
    return res.status(201).json(author);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const author = await Author.findById(id);
    await Book.deleteMany({ author: author._id });
    await author.deleteOne();
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAuthors, createAuthor, deleteAuthor };
