import { userReducer } from "@/entities/user";
import { ingredientReducer, ingredientsReducer } from "@/entities/ingredient";
import { recipeReducer, recipesReducer } from "@/entities/recipe";
import { stockReducer } from "@/entities/stock";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    ingredient: ingredientReducer,
    ingredients: ingredientsReducer,
    recipe: recipeReducer,
    recipes: recipesReducer,
    stock: stockReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
