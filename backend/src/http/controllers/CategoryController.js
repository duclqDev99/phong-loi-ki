const CategoryModel = require('../../models/CategoryModel');

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await CategoryModel.findById(req.params.id);
    if (category) {
      res.json(category);
    } else {
      res.status(404).send('Category not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createCategory = async (req, res) => {
  try {
    const id = await CategoryModel.create(req.body);
    res.status(201).json({ id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateCategory = async (req, res) => {
  try {
    await CategoryModel.update(req.params.id, req.body);
    res.status(200).send('Category updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteCategory = async (req, res) => {
  try {
    await CategoryModel.deleteById(req.params.id);
    res.status(200).send('Category deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
