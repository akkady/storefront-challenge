import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(CATEGORIES_URL);
    return response.data;
  }
);
const initialState = {
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  categories: [],
};
const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectStatus = (state) => state.categories.status;
export const selectError = (state) => state.categories.error;
export const selectAllCategories = (state) => state.categories.categories;
export default categorySlice.reducer;
