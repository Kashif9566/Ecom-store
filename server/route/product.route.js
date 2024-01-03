const express = require("express");
const router = express.Router();
const product = require("../controller/product.controller");
const { protect } = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post("/product", upload.single("image"), protect, product.createProduct);
router.get("/product", protect, product.getProducts);
router.get("/product/:productId", product.getProductById);
router.delete("/product/:productId", protect, product.deleteProduct);
router.get("/search", product.searchProducts);

module.exports = router;
