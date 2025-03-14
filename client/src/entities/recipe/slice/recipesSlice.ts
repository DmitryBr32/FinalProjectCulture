import { createSlice } from "@reduxjs/toolkit";
import { getRecipesThunk } from "../api";
import { IRecipeArrayType } from "../model";

type RecipesState = {
  recipes: IRecipeArrayType | [];
  error: string | null;
  isLoading: boolean;
};

const initialState: RecipesState = {
  recipes: [],
  error: null,
  isLoading: false,
};

const recipesSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //получить все рецепты
      .addCase(getRecipesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.data;
      })
      .addCase(getRecipesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецептов";
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
