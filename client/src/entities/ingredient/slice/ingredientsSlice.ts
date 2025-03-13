import { createSlice } from "@reduxjs/toolkit";
import {
  getIngredientsThunk,
  createIngredientThunk,
  deleteIngredientThunk,
} from "../api";
import { IIngredient } from "../model";

type IngredientState = {
  ingredients: IIngredient[];
  error: string | null;
  isLoading: boolean;
};

const initialState: IngredientState = {
  ingredients: [],
  error: null,
  isLoading: false,
};

const ingredientsSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload.data;
      })
      .addCase(getIngredientsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки ингредиентов";
      })

      .addCase(createIngredientThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createIngredientThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients.push(action.payload.data);
      })
      .addCase(createIngredientThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка создания ингредиента";
      })

      .addCase(deleteIngredientThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteIngredientThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload.data.id
        );
      })
      .addCase(deleteIngredientThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления ингредиента";
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
