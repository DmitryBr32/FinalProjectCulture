import { createSlice } from "@reduxjs/toolkit";
import { getUserFavRecipesThunk } from "../api";
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
  name: "favoriterecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //получить любимые рецепты пользователя

      .addCase(getUserFavRecipesThunk.pending, (state) => {
        state.isLoading = true;
        console.log("state.recipes pending");
      })
      .addCase(getUserFavRecipesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.data;
        console.log("state.recipes");
      })
      .addCase(getUserFavRecipesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецептов";
      });
  },
});

export const userRecipesReducer = recipesSlice.reducer;
