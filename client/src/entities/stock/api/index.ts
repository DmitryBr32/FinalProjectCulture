import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { IStock, IStockRowData, IStockUpdate } from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";

export const STOCK_ENDPOINT = "/stock" as const;

enum STOCK_THUNK_TYPES {
  GET_STOCK = "stock/getUserStock",
  UPDATE_STOCK = "stock/updateUserStock",
  CREATE_STOCK = "stock/сreateUserStock",
  DELETE_STOCK = "stock/deleteUserStock",
}

export const getStockThunk = createAsyncThunk<
  IServerResponse<IStock[]>,
  number,
  { rejectValue: IServerResponse }
>(STOCK_THUNK_TYPES.GET_STOCK, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(`${STOCK_ENDPOINT}/${id}`);
    console.log("Response data:", data);
    return {
      statusCode: 200,
      message: "Stock retrieved",
      data,
    };
  } catch (error) {
    console.error("Ошибка", error);
    return rejectWithValue(handleAxiosError(error));
  }
});

export const createStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  IStockRowData,
  { rejectValue: IServerResponse }
>(STOCK_THUNK_TYPES.CREATE_STOCK, async (stockData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      `${STOCK_ENDPOINT}/${stockData.userId}`,
      {
        ingredientTypeId: stockData.ingredientTypeId,
        ingredientBalance: stockData.ingredientBalance,
        title: stockData.title,
        strength: stockData.strength,
      }
    );
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const updateStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  IStockUpdate,
  { rejectValue: IServerResponse }
>(STOCK_THUNK_TYPES.UPDATE_STOCK, async (stockData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.put(
      `${STOCK_ENDPOINT}/${stockData.userId}/item/${stockData.id}`,
      {
        ingredientTypeId: stockData.ingredientTypeId,
        ingredientBalance: stockData.ingredientBalance,
        title: stockData.title,
        strength: stockData.strength,
      }
    );
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const deleteStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  { id: number; userId: number },
  { rejectValue: IServerResponse }
>(
  STOCK_THUNK_TYPES.DELETE_STOCK,
  async ({ id, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `${STOCK_ENDPOINT}/${userId}/item/${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
