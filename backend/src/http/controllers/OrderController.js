const OrderModel = require('../../models/OrderModel');
const OrderDetailModel = require('../../models/OrderDetailModel');

const getOrders = async (req, res) => {
  try {
    const orders = await OrderModel.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getProductsByOrderId = async (req, res) => {
  try {
    const order_detail = await OrderDetailModel.findByOrderId(req.params.id);
    if (order_detail) {
      res.json(order_detail);
    } else {
      res.status(404).send('Order not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createOrder = async (req, res) => {
  try {
    const id = await OrderModel.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateOrder = async (req, res) => {
  try {
    await OrderModel.update(req.params.id, req.body);
    res.status(200).send('Order updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteOrder = async (req, res) => {
  try {
    await OrderModel.deleteById(req.params.id);
    res.status(200).send('Order deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getOrders,
  getOrderById,
  getProductsByOrderId,
  createOrder,
  updateOrder,
  deleteOrder,
};
