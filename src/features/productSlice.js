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
  count: 0,
  ids: [],
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(PRODUCTS_URL);
    console.log(response.data);
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
export const selectProductByCategory = createSelector(
  [selectAllProducts, (state, category) => category],
  (products, category) =>
    products.filter((product) => product.category === category)
);
export const getCount = (state) => state.product.count;

export const { increaseCount, reactionAdded } = productSlice.actions;
export default productSlice.reducer;
