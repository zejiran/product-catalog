const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require('../controllers/productsController');

router.route('/')
    .get(getAllProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;
