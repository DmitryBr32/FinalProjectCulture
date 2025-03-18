export interface IStockRowData {
  ingredientTypeId: number;
  ingredientBalance: string;
  title: string;
  strength: string;
  userId: number;
}

export interface IStockUpdate extends IStockRowData {
  id: number;
}

export interface IStock extends IStockRowData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: number;
    username: string;
    email: string;
  };
  ingredientType: {
    id: number;
    type: string;
    isAlko: boolean;
    imgUrl: string;
  };
}

export type StockArrayType = IStock[];
