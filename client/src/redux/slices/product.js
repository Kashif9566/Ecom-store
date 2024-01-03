import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  singleProduct: null,
  searchedProducts: [],
  isLoading: false,
  isError: false,
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { productId, newQuantity } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.quantity = newQuantity;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.singleProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(searchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchedProducts = action.payload;
      })
      .addCase(searchProducts.rejected, (state) => {
        state.isError = true;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get("http://localhost:8000/product", config);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "fetchProductById",
  async ({ token, productId }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:8000/product/${productId}`,
      config
    );
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async (searchTerm) => {
    const response = await axios.get(
      `http://localhost:8000/search?query=${searchTerm}`
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async ({ token, productId }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:8000/product/${productId}`,
      config
    );
    return response.data;
  }
);
export const { updateQuantity } = productSlice.actions;

export const selectProducts = (state) => state.product.products;

export const singleProductDetail = (state) => state.product.singleProduct;

export const productsBySearch = (state) => state.product.searchedProducts;

export default productSlice.reducer;
