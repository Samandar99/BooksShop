import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  count: 0,
};

export const counterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
