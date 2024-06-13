const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  createProduct,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts); // working..
productsRouter.get("/:id", getOneProduct); // working..
productsRouter.post("/", upload.single("civilId"), createProduct); // working..

module.exports = productsRouter;
