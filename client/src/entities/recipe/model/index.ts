import { IRecipeComponentArrayType } from "@/entities/component/model";

export interface IRecipeTitle {
  title: string;
}

export interface IRecipeRowData extends IRecipeTitle {
  text: string;
  img: string;
  strengthLevel: string;
  isShot: boolean;
  likes: number;
  discription: string;
  Components: IRecipeComponentArrayType;
}

export interface IRecipe extends IRecipeRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IRecipeArrayType = IRecipe[];
