import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { IFavouriteRecipe, IFavouriteRecipeRowData } from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";

enum RECIPES_API_ENDPOINTS {
  ADD_FAVOURIT_RES = "recfavourite/add",
  DEL_FAVOURIT_RES = "recfavourite/del",
}

enum RECIPE_THUNK_TYPES {
  ADD_FAVOURIT_RES = "recfavourite/add",
  DEL_FAVOURIT_RES = "recfavourite/del",
}

export const addFavouriteRecipeThunk = createAsyncThunk<
  IServerResponse<IFavouriteRecipe>,
  IFavouriteRecipeRowData,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.ADD_FAVOURIT_RES,
  async (favoriteData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        RECIPES_API_ENDPOINTS.ADD_FAVOURIT_RES,
        favoriteData
      );
      console.log("санка", data);
      return { statusCode: 200, data, message: "все ок" };
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);

export const delFavouriteRecipeThunk = createAsyncThunk<
  IServerResponse<IFavouriteRecipe>,
  IFavouriteRecipeRowData,
  { rejectValue: IServerResponse }
>(
  RECIPE_THUNK_TYPES.ADD_FAVOURIT_RES,
  async (favoriteData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        RECIPES_API_ENDPOINTS.DEL_FAVOURIT_RES,
        favoriteData
      );
      console.log(data);
      return { statusCode: 200, data, message: "все ок" };
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
