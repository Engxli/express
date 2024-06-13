const express = require("express");
const { getAllAuthors } = require("./controllers");

const authorRouter = express.Router();

authorRouter.get("/", getAllAuthors);

module.exports = authorRouter;
