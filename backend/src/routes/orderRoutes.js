const express = require('express');
const OrderController = require('../http/controllers/OrderController');

const router = express.Router();

router.get('/', OrderController.getOrders);
router.get('/:id', OrderController.getOrderById);
router.get('/detail/:id', OrderController.getProductsByOrderId);
router.post('/create', OrderController.createOrder);
router.post('/update/:id', OrderController.updateOrder);
router.delete('/delete/:id', OrderController.deleteOrder);

module.exports = router;
