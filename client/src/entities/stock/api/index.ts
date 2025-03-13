import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "@/shared/lib/axiosInstance";
import { IServerResponse } from "@/shared/types";
import { IStock, IStockRowData } from "../model";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";

export const STOCK_ENDPOINT = "/stock" as const;

enum STOCK_THUNK_TYPES {
  GET_STOCK = "stock/getUserStock",
  CREATE_OR_UPDATE_STOCK = "stock/findOrCreateUserStock",
  DELETE_STOCK = "stock/deleteUserStock",
}

export const getStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  number,
  { rejectValue: IServerResponse }
>(STOCK_THUNK_TYPES.GET_STOCK, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(`${STOCK_ENDPOINT}/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const createOrUpdateStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  IStockRowData,
  { rejectValue: IServerResponse }
>(
  STOCK_THUNK_TYPES.CREATE_OR_UPDATE_STOCK,
  async (stockData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(STOCK_ENDPOINT, stockData);
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  }
);
export const deleteStockThunk = createAsyncThunk<
  IServerResponse<IStock>,
  number,
  { rejectValue: IServerResponse }
>(STOCK_THUNK_TYPES.DELETE_STOCK, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(`/stock/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
