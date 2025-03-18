export interface IFavouriteRecipeRowData {
  userId: number;
  recipeId: number;
}

export interface IFavouriteRecipe extends IFavouriteRecipeRowData {
  id: number;
}
