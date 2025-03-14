import { createSlice } from "@reduxjs/toolkit";
import { getIngredientsThunk } from "../api";
import { IngredientArrayType } from "../model";

type IngredientsState = {
  ingredients: IngredientArrayType | [];
  error: string | null;
  isLoading: boolean;
};

const initialState: IngredientsState = {
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
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
