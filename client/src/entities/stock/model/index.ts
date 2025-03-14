export interface IStockRowData {
  ingredientId: number;
  ingredientBalance: string;
  userId: number;
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
  ingredient: {
    id: number;
    type: string;
    title: string;
    strength: string;
  };
}

export type StockArrayType = IStock[];
