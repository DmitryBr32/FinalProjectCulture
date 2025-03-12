export interface IRecipeRowData {
  title: string;
  image: string;
}

export interface IRecipe extends IRecipeRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type RecipeArrayType = IRecipe[];

// export enum RECIPE_ACTION_TYPE {
//   SET_RECIPES = 'SET_RECIPES',
//   ADD_RECIPE = 'ADD_RECIPE',
//   // REMOVE_RECIPE = 'REMOVE_RECIPE',
//   // UPDATE_RECIPE = 'UPDATE_RECIPE',
// }