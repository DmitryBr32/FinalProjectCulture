export interface IRecipeRowData {
  title: string;
  text: string;
  img: string;
  strengthLevel: string;
  isShot: boolean;
  likes: number;
}

export interface IRecipe extends IRecipeRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IRecipeArrayType = IRecipe[];
