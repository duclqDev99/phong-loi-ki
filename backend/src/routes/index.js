const express = require('express');
const router = express.Router();

const usersRoute = require('./usersRoute');
const productRoute = require('./productRoutes');
const categoryRoute = require('./categoryRoutes');
const orderRoute = require('./orderRoutes');

router.use('/users', usersRoute);
router.use('/products', productRoute);
router.use('/categoryRoutes', categoryRoute);
router.use('/orderRoutes', orderRoute);

module.exports = router;