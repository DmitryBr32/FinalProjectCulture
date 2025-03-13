import { userReducer } from "@/entities/user";
import { ingredientReducer, ingredientsReducer } from "@/entities/ingredient";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
