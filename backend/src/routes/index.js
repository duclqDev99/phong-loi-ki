const express = require('express');
const router = express.Router();

const usersRoute = require('./usersRoute');
const productRoute = require('./productRoutes');
const categoryRoute = require('./categoryRoutes');

router.use('/users', usersRoute);
router.use('/products', productRoute);
router.use('/categoryRoutes', categoryRoute);

module.exports = router;