const express = require("express");
const { getAllBooks } = require("./controllers");
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);

module.exports = bookRouter;
