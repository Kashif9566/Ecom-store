const express = require("express");
const router = express.Router();
const order = require("../controller/order.controller");
const { protect } = require("../middleware/authMiddleware");

router.post("/user/:userId/order", order.createOrder);

router.get("/orders", order.getOrder);

router.post("/user/:userId/product/:productId/order", order.createOrderSample);

module.exports = router;
