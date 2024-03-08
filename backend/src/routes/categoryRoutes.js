const express = require('express');
const CategoryController = require('../http/controllers/CategoryController');

const router = express.Router();

router.get('/', CategoryController.getCategories);
router.get('/:id', CategoryController.getCategoryById);
router.post('/create', CategoryController.createCategory);
router.post('/update/:id', CategoryController.updateCategory);
router.delete('/delete/:id', CategoryController.deleteCategory);

module.exports = router;
