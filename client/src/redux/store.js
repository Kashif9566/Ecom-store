import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product";
import userReducer from "./slices/userSlice";
import categoryReducer from "./slices/categorySlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
  devTools: true,
});
