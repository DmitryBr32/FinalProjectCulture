import { ReactNode } from "react";

export interface Product {
  weight: ReactNode;
  dimensions: ReactNode;
  material: ReactNode;
  brand: ReactNode;
  article: ReactNode;
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
}