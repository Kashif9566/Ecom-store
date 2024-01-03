const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./route/user.route");
const productRoutes = require("./route/product.route");
const reviewRoutes = require("./route/review.route");
const categoryRoutes = require("./route/category.route");
const orderRoutes = require("./route/order.route");
const sequelize = require("./config/db.config");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/", productRoutes);
app.use("/", categoryRoutes);
app.use("/review", reviewRoutes);
app.use("/", userRoutes);
app.use("/", orderRoutes);

dotenv.config();

require("./model/association");
sequelize.sync();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
