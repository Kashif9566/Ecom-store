const express = require("express");
const router = express.Router();
const review = require("../controller/review.controller");

router.post("/user/:userId/product/product/:productId", review.createReview);
router.get("/product/:productId", review.getReviews);
router.delete("/:reviewId", review.deleteReview);

module.exports = router;
