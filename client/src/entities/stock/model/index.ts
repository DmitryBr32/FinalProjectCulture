export interface IStockRowData {
  ingredientId: number;
  ingredientBalance: string;
}

export interface IStock extends IStockRowData {
  id: number;
  userId: number;
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
