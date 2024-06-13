const Author = require("../../models/Author");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();

    return res.status(200).json(authors);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllAuthors };
