import { createSlice } from "@reduxjs/toolkit";
import {
  getStockThunk,
  createOrUpdateStockThunk,
  deleteStockThunk,
} from "../api";
import { IStock } from "../model";

type StockState = {
  stock: IStock | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: StockState = {
  stock: null,
  error: null,
  isLoading: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getStockThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStockThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stock = action.payload.data;
      })
      .addCase(getStockThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки ингредиента";
      })

      .addCase(createOrUpdateStockThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrUpdateStockThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stock = action.payload.data;
      })
      .addCase(createOrUpdateStockThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления ингредиента";
      })

      .addCase(deleteStockThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStockThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.stock = null;
      })
      .addCase(deleteStockThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления ингредиента";
      });
  },
});

export const stockReducer = stockSlice.reducer;
