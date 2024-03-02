const express = require('express');
const router = express.Router();
const ProductController = require('../http/controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.post('/create', ProductController.createProduct);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);

module.exports = router;
