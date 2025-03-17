export interface IIngredientResType {
  type: string;
}

export interface IIngredientRowData extends IIngredientResType {
  isAlko: boolean;
  imgUrl: string;
}

export interface IIngredient extends IIngredientRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export type IngredientArrayType = IIngredient[];
export type IIngredientResArrayType = IIngredientResType[];
