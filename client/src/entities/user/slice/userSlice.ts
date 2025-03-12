import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../model";
import {
  refreshTokensThunk,
  signInThunk,
  signOutThunk,
  signUpThunk,
} from "../api";

type UserState = {
  user: IUser | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: UserState = {
  user: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      ///* Refresh tokens */
      .addCase(refreshTokensThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshTokensThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(refreshTokensThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Cломалось получение токенов";
        state.user = null;
      })
      ///* signInThunk */
      .addCase(signInThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Cломалcя signIn";
        state.user = null;
      })

      ///* signUpThunk */
      .addCase(signUpThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload!.error ?? "Cломалcя signUp";
        state.user = null;
      })

      ///* signOutThunk */
      .addCase(signOutThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOutThunk.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
      })
      .addCase(signOutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Cломалcя signOut";
        state.user = null;
      });
  },
});

export const userReducer = userSlice.reducer;
