import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBestSellers = createAsyncThunk(
  "bestSellers/fetchBestSellers",
  async () => {
    const response = await axios.get(
      "https://samanchiko.github.io/products_api/data.json"
    );
    return response.data;
  }
);

export const fetchOtherData = createAsyncThunk(
  "other/fetchOtherData",
  async ({ categoryId, searchProducts }) => {
    const categorys = categoryId > 0 ? `category=${categoryId}` : "";

    const response = await axios.get(
      `https://651f5cce44a3a8aa476997b7.mockapi.io/books?${categorys}&search=${searchProducts}`
    );

    return response.data;
  }
);

const initialState = {
  bestSellersItem: [],
  otherData: [],
  isLoadingBest: true,
  isLoadingGoods: true,
};

const productSlice = createSlice({
  name: "bestSellers",
  initialState,
  reducers: {
    setBestSellersItem(state, action) {
      state.bestSellersItem = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBestSellers.pending, (state) => {
        state.isLoadingBest = true;
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.bestSellersItem = action.payload;
        state.isLoadingBest = false;
      })
      .addCase(fetchOtherData.pending, (state) => {
        state.isLoadingGoods = true;
      })
      .addCase(fetchOtherData.fulfilled, (state, action) => {
        state.otherData = action.payload;
        state.isLoadingGoods = false;
      });
  },
});

export default productSlice.reducer;
