const express = require('express');
const router = express.Router();
const ProductController = require('../http/controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.get('/get_product_by_user/:user_id', ProductController.getProductByUser);
router.get('/get_product_puslish/:status', ProductController.getProductPuslish);
router.get('/filter/:category_id', ProductController.filterProductWithCategory);
router.post('/create', ProductController.createProduct);
router.post('/update/:id', ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/search/:search', ProductController.searchProduct);

module.exports = router;
