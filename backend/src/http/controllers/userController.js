const userModel = require('../../models/userModel');
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
    try {
        const users = await userModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const loginUser = async (req, res) => {
    try {
        console.log(req.body.username);
        console.log(req.body.password);
        const user = await userModel.getUserByUsername(req.body.username);

        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);

            if (passwordMatch) {
                res.json(user);
            } else {
                res.status(404).send('Sai tên đăng nhập hoặc mật khẩu');
            }
        } else {
            res.status(404).send('Tài khoản không tồn tại');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        const userId = await userModel.createUser(req.body);
        res.status(201).send(`User created with ID: ${userId}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        await userModel.updateUser(req.params.id, req.body);
        res.send('User updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        await userModel.deleteUser(req.params.id);
        res.send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser,
    deleteUser
};
