const Product = require("../models/products.model");

const getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const getProductByID = async (req, res) => {
  try {
    const { Id } = req.params;

    const product = await Product.findById(Id);

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: "internal server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body); // does not work with out this

    if (!product) {
      return res
        .status(404)
        .json({ message: `Product with the id of ${id} not found` });
    }

    const updatedProduct = await Product.findById(id);

    res(200).json({ updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProduct, getProductByID, updateProduct };
