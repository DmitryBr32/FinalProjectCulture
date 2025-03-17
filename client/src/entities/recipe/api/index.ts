import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import {
  IRecipe,
  IRecipeRowData,
  IRecipeArrayType,
  IRecipeTitle,
} from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";
import { IIngredientResArrayType } from "@/entities/ingredient/model";

enum RECIPES_API_ENDPOINTS {
  RECIPES_ENDPOINT = "recipe/",
  GET_RECIPES_BY_INGRS = "recipe/getRecipesBySeveralIngrs",
  GET_RECIPE_BY_TITLE = "recipe/getByTitle",
}

enum RECIPE_THUNK_TYPES {
  GET_RECIPES = "recipe/getRecipes",
  GET_RECIPES_BY_INGRS = "recipe/getRecipesBySeveralIngrs",
  GET_RECIPE_BY_ID = "recipe/",
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
    const { data } = await axiosInstance.get(
      RECIPES_API_ENDPOINTS.RECIPES_ENDPOINT
    );
    console.log(data);
    return { statusCode: 200, data, message: "все ок" };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getRecipesByIngrsThunk = createAsyncThunk<
  IServerResponse<IRecipeArrayType>,
  IIngredientResArrayType,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.GET_RECIPES_BY_INGRS,
  async (typesData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        RECIPES_API_ENDPOINTS.GET_RECIPES_BY_INGRS,
        typesData
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
    const { data } = await axiosInstance.get(
      `${RECIPES_API_ENDPOINTS.RECIPES_ENDPOINT}/${id}`
    );
    return { statusCode: 200, data, message: "все ок" };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getRecipeByTitleThunk = createAsyncThunk<
  IServerResponse<IRecipe>,
  IRecipeTitle,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.GET_RECIPE_BY_TITLE,
  async (title, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        RECIPES_API_ENDPOINTS.GET_RECIPE_BY_TITLE,
        title
      );
      return { statusCode: 200, data, message: "все ок" };
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
    const { data } = await axiosInstance.post(
      RECIPES_API_ENDPOINTS.RECIPES_ENDPOINT,
      recipeData
    );
    return { statusCode: 200, data, message: "все ок" };
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
        `${RECIPES_API_ENDPOINTS.RECIPES_ENDPOINT}/${id}`,
        recipeData
      );
      return { statusCode: 200, data, message: "все ок" };
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
    const { data } = await axiosInstance.delete(
      `${RECIPES_API_ENDPOINTS.RECIPES_ENDPOINT}/${id}`
    );
    return { statusCode: 200, data, message: "все ок" };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
