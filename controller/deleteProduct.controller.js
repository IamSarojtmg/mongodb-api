const Product = require("../models/products.model");

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({message: `${id} not found`})
        }

        res.status(200).json({message:`product with ${id} deleted`})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = deleteProduct