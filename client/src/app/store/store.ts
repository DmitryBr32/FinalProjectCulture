import { userReducer } from "@/entities/user";
import { ingredientReducer, ingredientsReducer } from "@/entities/ingredient";
import { stockReducer } from "@/entities/stock";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    stock: stockReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
