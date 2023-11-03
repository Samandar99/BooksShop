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
    setFilters(state, action) {
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, incrementByAmount, setFilters } =
  counterSlice.actions;

export default counterSlice.reducer;
