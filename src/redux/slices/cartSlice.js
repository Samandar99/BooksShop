import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
  savedItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductsSaved(state, action) {
      const existingItem = state.savedItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.count++;
      } else {
        state.savedItems.push({
          ...action.payload,
          count: 1,
        });
      }
      
      localStorage.setItem("savedItems", JSON.stringify(state.savedItems))

    },
    setSavedItems(state, action) {
      state.savedItems = action.payload;
    },

    addProducts(state, actions) {
      const findProducts = state.items.find(
        (obj) => obj.id === actions.payload.id
      );

      if (findProducts) {
        findProducts.count++;
      } else {
        state.items.push({
          ...actions.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);

      localStorage.setItem('cartItems', JSON.stringify(state.items));
      
    },

    minusProducts(state, action) {
      const findProductIndex = state.items.findIndex(
        (obj) => obj.id === action.payload
      );
      if (findProductIndex !== -1) {
        if (state.items[findProductIndex].count > 1) {
          state.items[findProductIndex].count--;
        } else {
          state.items.splice(findProductIndex, 1);
        }
        state.totalPrice = state.items.reduce((sum, obj) => {
          return obj.price * obj.count + sum;
        }, 0);
      }
    },
  },
});

export const { addProducts, minusProducts, addProductsSaved, setSavedItems } =
  cartSlice.actions;

export default cartSlice.reducer;
