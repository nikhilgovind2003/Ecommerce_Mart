import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";   // Import the product slice

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
