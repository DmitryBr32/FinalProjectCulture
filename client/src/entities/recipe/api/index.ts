import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { IRecipe, IRecipeRowData, IRecipeArrayType } from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";

export const RECIPES_ENDPOINT = "/recipe" as const;

enum RECIPE_THUNK_TYPES {
  GET_RECIPES = "recipe/getRecipes",
  GET_RECIPES_BY_STRENGTH = "recipe/getRecipesByStrength",
  GET_RECIPE_BY_ID = "recipe/getRecipeById",
  GET_RECIPE_BY_TITLE = "recipe/getRecipeByTitle",
  CREATE_RECIPE = "recipe/createRecipe",
  UPDATE_RECIPE = "recipe/updateRecipeById",
  DELETE_RECIPE = "recipe/deleteRecipe",
}

export const getRecipesThunk = createAsyncThunk<
  IServerResponse<IRecipeArrayType>,
  void,
  { rejectValue: IServerResponse }
>(RECIPE_THUNK_TYPES.GET_RECIPES, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(RECIPES_ENDPOINT);
    console.log(data);
    return { statusCode: 200, data, message: "все ок" };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getRecipesByStrengthThunk = createAsyncThunk<
  IServerResponse<IRecipeArrayType>,
  string,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.GET_RECIPES_BY_STRENGTH,
  async (strengthLevel, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        RECIPES_ENDPOINT,
        strengthLevel
      );
      console.log(data);
      return { statusCode: 200, data, message: "все ок" };
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const getRecipeByIdThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  number,
  { rejectValue: IServerResponse }
>(RECIPE_THUNK_TYPES.GET_RECIPE_BY_ID, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(`${RECIPES_ENDPOINT}/${id}`);
    return { statusCode: 200, data, message: "все ок" };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getRecipeByTitleThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  string,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.GET_RECIPE_BY_TITLE,
  async (title, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(RECIPES_ENDPOINT, title);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const createRecipeThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  IRecipeRowData,
  { rejectValue: IServerResponse }
>(RECIPE_THUNK_TYPES.CREATE_RECIPE, async (recipeData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(RECIPES_ENDPOINT, recipeData);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const updateRecipeByIdThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  { id: number; recipeData: IRecipeRowData },
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.UPDATE_RECIPE,
  async ({ id, recipeData }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `${RECIPES_ENDPOINT}/${id}`,
        recipeData
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const deleteRecipeThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  number,
  { rejectValue: IServerResponse }
>(RECIPE_THUNK_TYPES.DELETE_RECIPE, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(`${RECIPES_ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
