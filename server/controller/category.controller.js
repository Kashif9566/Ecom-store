const Category = require("../model/category.model");
const Product = require("../model/product.model");

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = await Category.create({
      name,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.allCategories = async (req, res) => {
  try {
    const allCategories = await Category.findAll();
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    await Category.destroy({ where: { id: categoryId } });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    const products = await category.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
