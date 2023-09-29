const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a product name'],
        },
        description: {
            type: String,
            required: [true, 'Please add a product description'],
        },
        sku: {
            type: String,
            required: [true, 'Please add a product SKU'],
            unique: true,
        },
        image: {
            type: String,
            required: [true, 'Please add a product image URL'],
        },
        tags: {
            type: [String], // Array of strings for product tags
        },
        price: {
            type: Number,
            required: [true, 'Please add a product price'],
        },
        stock: {
            type: Number,
            required: [true, 'Please add a product stock quantity'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
