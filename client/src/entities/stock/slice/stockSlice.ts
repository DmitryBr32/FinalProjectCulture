import { createSlice } from "@reduxjs/toolkit";
import {
  getStockThunk,
  createOrUpdateStockThunk,
  deleteStockThunk,
} from "../api";
import { IStock } from "../model";

type StockState = {
  stock: IStock[];
  error: string | null;
  isLoading: boolean;
};

const initialState: StockState = {
  stock: [],
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
        console.log("Новый сток:", state.stock);
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
        const updatedStock = action.payload.data;
        const index = state.stock.findIndex(
          (item) => item.id === updatedStock.id
        );

        if (index !== -1) {
          state.stock[index] = updatedStock;
        } else {
          state.stock.push(updatedStock);
        }
      })
      .addCase(createOrUpdateStockThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления ингредиента";
      })

      .addCase(deleteStockThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStockThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stock = state.stock.filter((item) => item.id !== action.meta.arg);
      })
      .addCase(deleteStockThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления ингредиента";
      });
  },
});

export const stockReducer = stockSlice.reducer;
