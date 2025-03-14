import { createSlice } from "@reduxjs/toolkit";
import {
  getIngredientByIdThunk,
  updateIngredientByIdThunk,
  deleteIngredientThunk,
  createIngredientThunk,
} from "../api";
import { IIngredient } from "../model";

type IngredientState = {
  ingredient: IIngredient | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: IngredientState = {
  ingredient: null,
  error: null,
  isLoading: false,
};

const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getIngredientByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredient = action.payload.data;
      })
      .addCase(getIngredientByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки ингредиента";
      })

      .addCase(createIngredientThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIngredientThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredient = action.payload.data;
      })
      .addCase(createIngredientThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка создания ингредиента";
      })

      .addCase(updateIngredientByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateIngredientByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredient = action.payload.data;
      })
      .addCase(updateIngredientByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления ингредиента";
      })

      .addCase(deleteIngredientThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIngredientThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.ingredient = null;
      })
      .addCase(deleteIngredientThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления ингредиента";
      });
  },
});

export const ingredientReducer = ingredientSlice.reducer;
