const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.error("MongoDB connection failed ", error);
    process.exit(1); // Exit the app on failure
  }
};

module.exports = connectDB;
