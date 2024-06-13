const { default: mongoose } = require("mongoose");
const Product = require("../../models/Product.js");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res
        .status(404)
        .json({ meg: "Product with this id, is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};

const createProduct = async (req, res) => {
  try {
    if (req.file) {
      req.body.civilId = req.file.path;
    }
    const newProduct = await Product.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllProducts, getOneProduct, createProduct };
