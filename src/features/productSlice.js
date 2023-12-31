import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

export const productAdapter = createEntityAdapter({
  selectId: (product) => product["id"],
  sortComparer: (a, b) => a.rating?.rate > b.rating?.rate,
});

const initialState = productAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  ids: [],
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedProducts = action.payload;
        productAdapter.setAll(state, loadedProducts);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
  selectIds: selectProductsIds,
} = productAdapter.getSelectors((state) => state.products);

export const selectStatus = (state) => state.products.status;
export const selectError = (state) => state.products.error;
export const selectProductByCategoryAndRates = createSelector(
  [
    selectAllProducts,
    (state, category) => category,
    (state, category, rating) => rating,
  ],
  (products, category, rating) => {
    if (!category && rating == 0) {
      return products;
    } else if (category && rating == 0) {
      return products.filter((product) => product.category === category);
    } else if (!category && rating > 0) {
      return products.filter((product) => product.rating.rate > rating);
    } else {
      return products.filter(
        (product) =>
          product.category === category && product.rating.rate > rating
      );
    }
  }
);

export default productSlice.reducer;
