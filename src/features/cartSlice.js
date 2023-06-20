import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  entities: [],
  actionStatus: {
    status: "idle", //'idle' | 'succeeded' | 'failed'
    message: "",
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state) {
      const storedCart = localStorage.getItem("cart");
      state.entities = storedCart ? JSON.parse(storedCart) : [];
      state.count = state.entities.length;
    },
    addToCart(state, action) {
      const productId = action.payload.productId;
      const existingProduct = state.entities.find(
        (item) => item.productId === productId
      );

      if (existingProduct) {
        state.actionStatus.status = "failed";
        state.actionStatus.message = "Product already exists in the cart.";
      } else {
        const newProduct = {
          productId,
          quantity: 1,
          price: action.payload.price,
        };

        state.entities.push(newProduct);
        state.count = state.entities.length;
        state.actionStatus.status = "succeeded";
        state.actionStatus.message = "Product added to the cart!";
        localStorage.setItem("cart", JSON.stringify(state.entities));
      }
    },
    updateQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const cartItem = state.entities.find(
        (item) => item.productId === productId
      );
      if (cartItem) {
        cartItem.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.entities));
        state.actionStatus.status = "succeeded";
        state.actionStatus.message = "Quantity updated !";
      } else {
        state.actionStatus.status = "failed";
        state.actionStatus.message = "product does not exist in the cart.";
      }
    },
    removeProductFromCart(state, action) {
      const productId = action.payload.productId;
      state.entities = state.entities.filter(
        (item) => item.productId !== productId
      );
      state.count = state.entities.length;
      localStorage.setItem("cart", JSON.stringify(state.entities));
    },
    resetActionStatus(state) {
      state.actionStatus.status = "idle";
      state.actionStatus.message = "";
    },
    removeAllFromCart(state) {
      state.entities = [];
      state.count = 0;
      state.actionStatus.status = "succeeded";
      state.actionStatus.message = "All products removed from the cart!";
      localStorage.removeItem("cart");
    },
  },
});

export const selectCartCount = (state) => state.cart.count;
export const selectCartEntries = (state) => state.cart.entities;
export const selectCartActionStatus = (state) => state.cart.actionStatus;
export const selectEntryByProductId = createSelector(
  [selectCartEntries, (state, productId) => productId],
  (entities, productId) =>
    entities.find((entry) => entry.productId === productId)
);

export const {
  addToCart,
  initializeCart,
  resetActionStatus,
  removeProductFromCart,
  updateQuantity,
  removeAllFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
