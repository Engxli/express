const express = require("express");
const { getAllAuthors, createAuthor, deleteAuthor } = require("./controllers");

const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);
authorRouter.post("/", createAuthor);
authorRouter.delete("/:id", deleteAuthor);

module.exports = authorRouter;
