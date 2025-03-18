import { createSlice } from "@reduxjs/toolkit";
import { addFavouriteRecipeThunk, delFavouriteRecipeThunk } from "../api";
import { IFavouriteRecipe } from "../model";

type FavouriteRecipeState = {
  favouriteRecipe: IFavouriteRecipe | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: FavouriteRecipeState = {
  favouriteRecipe: null,
  error: null,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: "favouriteRecipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //добавить рецепт в избранное
      .addCase(addFavouriteRecipeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavouriteRecipeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favouriteRecipe = action.payload.data;
      })
      .addCase(addFavouriteRecipeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецепта";
      })
      //удалить рецепт из избранного
      .addCase(delFavouriteRecipeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delFavouriteRecipeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favouriteRecipe = action.payload.data;
      })
      .addCase(delFavouriteRecipeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецепта";
      });
  },
});

export const recipeReducer = recipeSlice.reducer;
