import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { IIngredient, IIngredientRowData, IngredientArrayType } from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";

export const INGREDIENTS_ENDPOINT = "/ingredient" as const;

enum INGREDIENT_THUNK_TYPES {
  GET_INGREDIENTS = "ingredient/getIngredients",
  GET_INGREDIENT_BY_ID = "ingredient/getIngredientById",
  CREATE_INGREDIENT = "ingredient/createIngredient",
  UPDATE_INGREDIENT = "ingredient/updateIngredientById",
  DELETE_INGREDIENT = "ingredient/deleteIngredient",
}

export const getIngredientsThunk = createAsyncThunk<
  IServerResponse<IngredientArrayType>,
  void,
  { rejectValue: IServerResponse }
>(INGREDIENT_THUNK_TYPES.GET_INGREDIENTS, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(INGREDIENTS_ENDPOINT);
    return {
      statusCode: 200,
      message: "Ingredient recieved",
      data,
    };
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const getIngredientByIdThunk = createAsyncThunk<
  IServerResponse<IIngredient>,
  number,
  { rejectValue: IServerResponse }
>(
  INGREDIENT_THUNK_TYPES.GET_INGREDIENT_BY_ID,
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/ingredient/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const createIngredientThunk = createAsyncThunk<
  IServerResponse<IIngredient>,
  IIngredientRowData,
  { rejectValue: IServerResponse }
>(
  INGREDIENT_THUNK_TYPES.CREATE_INGREDIENT,
  async (ingredientData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        INGREDIENTS_ENDPOINT,
        ingredientData
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const updateIngredientByIdThunk = createAsyncThunk<
  IServerResponse<IIngredient>,
  { id: number; ingredientData: IIngredientRowData },
  { rejectValue: IServerResponse }
>(
  INGREDIENT_THUNK_TYPES.UPDATE_INGREDIENT,
  async ({ id, ingredientData }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `/ingredient/${id}`,
        ingredientData
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const deleteIngredientThunk = createAsyncThunk<
  IServerResponse<IIngredient>,
  number,
  { rejectValue: IServerResponse }
>(INGREDIENT_THUNK_TYPES.DELETE_INGREDIENT, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(`/ingredient/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
