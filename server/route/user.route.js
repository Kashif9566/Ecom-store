const express = require("express");
const router = express.Router();
const user = require("../controller/user.controller");
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

router.post("/register", upload.single("image"), user.createUser);
router.post("/login", user.login);

module.exports = router;
