const Product = require('../models/products.model')

const getProduct = async (req, res) => {
try {
    const products = await Product.find()
   res.status(200).json({products})
} catch (error) {
    res.status(500).json({message: 'internal server error'})
}
}

const getProductByID = async (req, res) => {
    try {
        const { Id } = req.params

        const product = await Product.findById(Id)

        res.status(200).json({product})

} catch (error) {
    res.status(500).json({message: 'internal server error'})
}
}


module.exports = {getProduct, getProductByID}