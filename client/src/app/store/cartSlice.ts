import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id?: number;
  productId: number;
  quantity: number;
  image?: string;
  name?: string;
  description?: string;
  price?: number;
  Product?: Product;
}

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ productId: number; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.productId === productId);
      if (existingItem) {
        existingItem.quantity = quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const filteredState = state.items.filter((item) => item.id !== action.payload);
      state.items = filteredState;
    },
    clearCart: (state) => {
      state.items = [];
    },
    initializeCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, initializeCart, updateCartItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;