const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  category: String,
  rating: Number,
});
module.exports = mongoose.model("Product", productSchema);