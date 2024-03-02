const express = require('express');
const router = express.Router();

const usersRoute = require('./usersRoute');
const productRoute = require('./productRoutes');

router.use('/users', usersRoute);
router.use('/products', productRoute);

module.exports = router;