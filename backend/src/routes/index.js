const express = require('express');
const router = express.Router();

const usersRoute = require('./usersRoute');
const productRoute = require('./productRoutes');
const categoryRoute = require('./categoryRoutes');
const orderRoute = require('./orderRoutes');
const sliderRoute = require('./sliderRoutes');

router.use('/users', usersRoute);
router.use('/products', productRoute);
router.use('/sliders', sliderRoute);
router.use('/categoryRoutes', categoryRoute);
router.use('/orderRoutes', orderRoute);

module.exports = router;
