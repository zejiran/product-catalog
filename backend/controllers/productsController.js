const createProduct = (req, res) => {
    res.status(200).json({ message: 'Create a new product' });
};

const getAllProducts = (req, res) => {
    res.status(200).json({ message: 'Get all products' });
};

const updateProduct = (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: `Update product ${productId}` });
};

const deleteProduct = (req, res) => {
    const productId = req.params.id;
    res.status(200).json({ message: `Delete product ${productId}` });
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};
