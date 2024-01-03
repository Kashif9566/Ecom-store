const express = require("express");
const router = express.Router();
const category = require("../controller/category.controller");
router.post("/category", category.createCategory);
router.get("/category", category.allCategories);
router.delete("/category/:categoryId", category.deleteCategory);
router.get("/categories/:categoryId/products", category.getProductsByCategory);

module.exports = router;
