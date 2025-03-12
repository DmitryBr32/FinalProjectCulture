import { IServerResponse } from "@/shared/types";
import { IAuthResponseData, IUserSignInData, IUserSignUpData } from "../model";
import { axiosInstance, setAccessToken } from "@/shared/lib/axiosInstance";
import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

enum USER_API_ENDPOINTS {
  SIGN_IN = "/auth/signIn",
  SIGN_UP = "/auth/signUp",
  SIGN_OUT = "/auth/signOut",
  REFRESH_TOKENS = "/auth/refreshTokens",
}

enum USER_THUNK_TYPES {
  SIGN_IN = "/user/signIn",
  SIGN_UP = "/user/signUp",
  SIGN_OUT = "/user/signOut",
  REFRESH_TOKENS = "/user/refreshTokens",
}

export const refreshTokensThunk = createAsyncThunk<
  IServerResponse<IAuthResponseData>,
  void,
  { rejectValue: IServerResponse }
>(USER_THUNK_TYPES.REFRESH_TOKENS, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(USER_API_ENDPOINTS.REFRESH_TOKENS);
    setAccessToken(data.data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const signInThunk = createAsyncThunk<
  IServerResponse<IAuthResponseData>,
  IUserSignInData,
  { rejectValue: IServerResponse }
>(USER_THUNK_TYPES.SIGN_IN, async (userSignInData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      USER_API_ENDPOINTS.SIGN_IN,
      userSignInData
    );
    setAccessToken(data.data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const signUpThunk = createAsyncThunk<
  IServerResponse<IAuthResponseData>,
  IUserSignUpData,
  { rejectValue: IServerResponse }
>(USER_THUNK_TYPES.SIGN_UP, async (userSignUpData, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      USER_API_ENDPOINTS.SIGN_UP,
      userSignUpData
    );
    setAccessToken(data.data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});

export const signOutThunk = createAsyncThunk<
  IServerResponse,
  void,
  { rejectValue: IServerResponse }
>(USER_THUNK_TYPES.SIGN_OUT, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(USER_API_ENDPOINTS.SIGN_OUT);
    setAccessToken(data.data.accessToken);
    return data;
  } catch (error) {
    const err = error as AxiosError<IServerResponse>;
    return rejectWithValue(err.response!.data);
  }
});
