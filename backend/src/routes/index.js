const express = require('express');
const router = express.Router();
const app = express();

const usersRoute = require('./usersRoute');

router.use('/users', usersRoute);

module.exports = router;