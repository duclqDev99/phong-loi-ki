const ProductModel = require('../../models/ProductModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createProduct = async (req, res) => {
    try {
      const id = await ProductModel.createProduct(req.body);
      res.status(201).json({ id });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      await ProductModel.updateProduct(req.params.id, req.body);
      res.status(200).send('Product updated successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  const deleteProduct = async (req, res) => {
    try {
      await ProductModel.deleteProduct(req.params.id);
      res.status(200).send('Product deleted successfully');
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  };