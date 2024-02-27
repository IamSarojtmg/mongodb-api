const Product = require("../models/products.model");

const createProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createProducts;

// DB.JS IS NOT RUNNING.
