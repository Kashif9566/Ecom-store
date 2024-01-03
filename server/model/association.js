const User = require("./user.model");
const Product = require("./product.model");
const Review = require("./review.model");
const Category = require("./category.model");
const Order = require("./order.model");

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Product.belongsToMany(Category, { through: "ProductCategories" });
Category.belongsToMany(Product, { through: "ProductCategories" });

Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });
