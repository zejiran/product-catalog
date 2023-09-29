const asyncHandler = require('express-async-handler');

const createProduct = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Create a new product' });
});

const getAllProducts = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Get all products' });
});

const updateProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    res.status(200).json({ message: `Update product ${productId}` });
});

const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    res.status(200).json({ message: `Delete product ${productId}` });
});

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};
