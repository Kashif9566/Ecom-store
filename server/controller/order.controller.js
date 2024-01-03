const Order = require("../model/order.model");
const Product = require("../model/product.model");
const User = require("../model/user.model");

exports.createOrder = async (req, res) => {
  const { userId } = req.params;
  const {
    username,
    email,
    address,
    phoneNumber,
    city,
    postalCode,
    country,
    paymentMethod,
    products,
  } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const newOrder = await Order.create({
      username,
      email,
      address,
      phoneNumber,
      userId,
      postalCode,
      country,
      city,
      paymentMethod,
    });

    for (const { productId, quantity } of products) {
      const product = await Product.findByPk(productId);
      if (!product) {
        return res
          .status(404)
          .json({ error: `Product with ID ${productId} not found` });
      }

      await newOrder.addProduct(product, { through: { quantity } });
    }

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getOrder = async (req, res) => {
  const userId = req.params.userId;
  try {
    const orders = await Order.findAll({ where: { userId } });
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createOrderSample = async (req, res) => {
  const { userId, productId } = req.params;
  const {
    username,
    email,
    address,
    phoneNumber,
    city,
    postalCode,
    country,
    paymentMethod,
  } = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const product = await Product.findByPk(productId);

    const newOrder = await Order.create({
      username,
      email,
      address,
      phoneNumber,
      userId,
      productId,
      postalCode,
      country,
      city,
      paymentMethod,
    });
    await newOrder.addUser(user);
    await newOrder.addProduct(product);

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
