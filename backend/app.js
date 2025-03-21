const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db.js");  // Import db connection
const productRoutes = require("./routes/products.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
connectDB();


// Routes
app.use("/api/products", productRoutes);


// Sample Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Import Routes
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
