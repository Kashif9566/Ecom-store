import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "fetchCategories",
  async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get("http://localhost:8000/category", config);
    return response.data;
  }
);

export const fetchProductsOfCategory = createAsyncThunk(
  "fetchProductsOfCategory",
  async ({ token, categoryId }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `http://localhost:8000/categories/${categoryId}/products`,
      config
    );
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async ({ token, categoryId }) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(
      `http://localhost:8000/category/${categoryId}`,
      config
    );
    return response.data;
  }
);

const initialState = {
  categories: [],
  selectedCategoryId: null,
  categoryProducts: [],
  isloading: false,
  isError: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isloading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.isError = true;
        state.isloading = false;
      })
      .addCase(fetchProductsOfCategory.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchProductsOfCategory.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.isloading = false;
      })
      .addCase(fetchProductsOfCategory.rejected, (state, action) => {
        state.isError = true;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isloading = false;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

export const fetchedCatogories = (state) => state.category.categories;

export const fetchedProductsOfCategory = (state) =>
  state.category.categoryProducts;

export const selectSelectedCategory = (state) =>
  state.category.selectedCategoryId;

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
