import { axiosInstance } from '@/shared/lib/axiosInstance';
import { IRecipe, IRecipeRowData, RecipeArrayType } from '../model';
import { IServerResponse } from '@/shared/types';

export const RECIPES_ENDPOINT = '/recipes' as const;

export class RecipeApi {
  static async getRecipes(): Promise<IServerResponse<RecipeArrayType>> {
    const response = await axiosInstance.get(RECIPES_ENDPOINT);
    return response.data;
  }

  static async getRecipeById(id: number): Promise<IServerResponse<IRecipe>> {
    const response = await axiosInstance.get<IServerResponse<IRecipe>>(
      `${RECIPES_ENDPOINT}/${id}`
    );
    return response.data;
  }

  static async createRecipe(
    recipeData: IRecipeRowData
  ): Promise<IServerResponse<IRecipe>> {
    const response = await axiosInstance.post(RECIPES_ENDPOINT, recipeData);
    return response.data;
  }
}
