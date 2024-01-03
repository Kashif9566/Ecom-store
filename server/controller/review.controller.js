const Review = require("../model/review.model");

exports.createReview = async (req, res) => {
  const { name, comment } = req.body;
  const { userId, productId } = req.params;
  try {
    const newReview = await Review.create({ name, comment, userId, productId });
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getReviews = async (req, res) => {
  const productId = req.params.productId;
  try {
    const allReviews = await Review.findAll({ where: { productId } });
    res.status(200).json(allReviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteReview = async (req, res) => {
  const reviewId = req.params.reviewId;
  try {
    const deletedReviewCount = await Review.destroy({
      where: { id: reviewId },
    });
    if (deletedReviewCount > 0) {
      res.status(200).json({ message: "Review deleted successfully" });
    } else {
      res.status(404).json({ message: "Review not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
