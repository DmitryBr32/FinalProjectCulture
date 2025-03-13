export interface IIngredientRowData {
  type: string;
  title: string;
  strength: string;
}

export interface IIngredient extends IIngredientRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IngredientArrayType = IIngredient[];
