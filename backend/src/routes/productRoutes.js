const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadProductImageMiddleware');
const ProductController = require('../http/controllers/ProductController');

router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);
router.get('/get_product_by_user/:user_id', ProductController.getProductByUser);
router.get('/get_product_puslish/:status', ProductController.getProductPuslish);
router.get('/slider', ProductController.getProductSlider);
router.get('/filter/:category_id', ProductController.filterProductWithCategory);
router.post('/create', upload.single('image'), ProductController.createProduct);
router.post('/upload/image', ProductController.uploadImage);
router.post('/update/:id', upload.single('image'), ProductController.updateProduct);
router.delete('/delete/:id', ProductController.deleteProduct);
router.get('/search/:search', ProductController.searchProduct);

module.exports = router;
