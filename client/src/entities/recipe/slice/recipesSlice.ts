import { createSlice } from "@reduxjs/toolkit";
import { getRecipesThunk, getRecipesByIngrsThunk } from "../api";
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
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //получить все рецепты
      .addCase(getRecipesThunk.pending, (state) => {
        state.isLoading = true;
        console.log("state.recipes pending");
      })
      .addCase(getRecipesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.data;
        console.log("state.recipes");
      })
      .addCase(getRecipesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецептов";
      })

      .addCase(getRecipesByIngrsThunk.pending, (state) => {
        state.isLoading = true;
        console.log("state.recipes pending");
      })
      .addCase(getRecipesByIngrsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipes = action.payload.data;
        console.log("state.recipes");
      })
      .addCase(getRecipesByIngrsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецептов";
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
