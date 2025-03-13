export { ingredientReducer } from "./slice/ingredientSlice";
export { ingredientsReducer } from "./slice/ingredientsSlice";

export {
  getIngredientsThunk,
  getIngredientByIdThunk,
  createIngredientThunk,
  updateIngredientByIdThunk,
  deleteIngredientThunk,
} from "./api";

export type { IIngredient } from "./model";
