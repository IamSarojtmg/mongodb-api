const Product = require('../models/products.model')


const createProducts = async(req, res) => {
try {
    const product = await Product.create(req.body)
    console.log(product, `product`);
    res.status(200).json(product)
} catch (error) {
    console.log(error.message, `error message`);
    res.status(500).json({message:error.message})
}
}

module.exports = createProducts

// DB.JS IS NOT RUNNING.