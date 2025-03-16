import { createSlice } from "@reduxjs/toolkit";
import {
  getRecipeByIdThunk,
  getRecipeByTitleThunk,
  createRecipeThunk,
  updateRecipeByIdThunk,
  deleteRecipeThunk,
} from "../api";
import { IRecipe } from "../model";

type RecipeState = {
  recipe: IRecipe | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: RecipeState = {
  recipe: null,
  error: null,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: "ingredient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //получить рецепт по id
      .addCase(getRecipeByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipeByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload.data;
      })
      .addCase(getRecipeByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецепта";
      })

      //получить рецепт по названию
      .addCase(getRecipeByTitleThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipeByTitleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload.data;
      })
      .addCase(getRecipeByTitleThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки рецепта";
      })

      //создать рецепт
      .addCase(createRecipeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createRecipeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload.data;
      })
      .addCase(createRecipeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка создания рецепта";
      })
      //изменить рецепт
      .addCase(updateRecipeByIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateRecipeByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload.data;
      })
      .addCase(updateRecipeByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления рецепта";
      })
      //удалить рецепт
      .addCase(deleteRecipeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRecipeThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.recipe = null;
      })
      .addCase(deleteRecipeThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления рецепта";
      });
  },
});

export const recipeReducer = recipeSlice.reducer;
