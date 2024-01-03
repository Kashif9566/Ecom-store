const Product = require("../model/product.model");
const Category = require("../model/category.model");
const { Op } = require("sequelize");
exports.createProduct = async (req, res) => {
  const {
    name,
    price,
    cost,
    profit,
    margin,
    size,
    brand,
    color,
    description,
    category: categoryId,
  } = req.body;
  const image = req.file ? req.file.path : null;
  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      size,
      brand,
      color,
      image,
      profit,
      margin,
      cost,
    });

    const category = await Category.findByPk(categoryId);
    if (category) {
      await newProduct.addCategory(category);
    }

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getProductById = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const deletedProduct = await Product.destroy({ where: { id: productId } });
    if (deletedProduct) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.searchProducts = async (req, res) => {
  const { query } = req.query;
  try {
    const products = await Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${query}%`,
            },
          },
          {
            brand: {
              [Op.iLike]: `%${query}%`,
            },
          },
          {
            description: {
              [Op.iLike]: `%${query}%`,
            },
          },
        ],
      },
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
