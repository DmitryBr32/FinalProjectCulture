import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  cocktailSearch: string;
}

const initialState: SearchState = {
  cocktailSearch: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCocktailSearch(state, action: PayloadAction<string>) {
      state.cocktailSearch = action.payload;
    },
  },
});

export const { setCocktailSearch } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
