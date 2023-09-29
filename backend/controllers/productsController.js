const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const createProduct = asyncHandler(async (req, res) => {
    const { name, description, sku, image, tags, price, stock } = req.body;
    const newProduct = await Product.create({
        name,
        description,
        sku,
        image,
        tags,
        price,
        stock,
    });
    res.status(201).json({ message: 'Product created', data: newProduct });
});

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products)
});

const getProductById = asyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }
    res.status(200).json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    const { name, description, sku, image, tags, price, stock } = req.body;

    product.name = name || product.name;
    product.description = description || product.description;
    product.sku = sku || product.sku;
    product.image = image || product.image;
    product.tags = tags || product.tags;
    product.price = price || product.price;
    product.stock = stock || product.stock;

    const updatedProduct = await product.save();

    res.status(200).json({ message: 'Product updated', data: updatedProduct });
});

const deleteProduct = asyncHandler(async (req, res) => {
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    await Product.findByIdAndRemove(productId);

    res.status(200).json({ message: 'Product deleted', id: productId });
});


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
