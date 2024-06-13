const express = require("express");
const { getAllBooks, createBook, deleteBook } = require("./controllers");
const upload = require("../../middlewares/multer");
const bookRouter = express.Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", upload.array("images"), createBook);
bookRouter.delete("/:id", deleteBook);
module.exports = bookRouter;
