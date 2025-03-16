import { IIngredient } from "@/entities/ingredient";

export interface IRecipeComponentRowData {
  ingredientTypeId: number;
  recipeId: number;
  quantity: string;
  ingredient: IIngredient;
}

export interface IRecipeComponent extends IRecipeComponentRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IRecipeComponentArrayType = IRecipeComponent[];
