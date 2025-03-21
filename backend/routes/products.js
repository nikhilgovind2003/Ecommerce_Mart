const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Routes
router.get("/", getAllProducts);          // Get all products
router.get("/:id", getProductById);       // Get product by ID
router.post("/", createProduct);        // Add new product
router.put("/:id", updateProduct);        // Update product by ID
router.delete("/:id", deleteProduct);     // Delete product by ID

module.exports = router;
