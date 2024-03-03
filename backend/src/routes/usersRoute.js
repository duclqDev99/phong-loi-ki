const express = require('express');
const router = express.Router();
const userController = require('../http/controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.get('/login/:username', userController.getUserByUsername);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
