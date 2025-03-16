export interface IIngredientRowData {
  type: string;
  isAlko: boolean;
  imgUrl: string;
}

export interface IIngredient extends IIngredientRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IngredientArrayType = IIngredient[];
