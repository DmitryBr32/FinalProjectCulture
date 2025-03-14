import { Product } from '@/entities/product/product';
import { axiosInstance } from '@/shared/lib/axiosInstance';

const API_URL = import.meta.env.VITE_API || 'http://localhost:3000/api';

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/shop/products`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductById = async (id: number): Promise<Product> => {
  try {
    const response = await axiosInstance.get(`${API_URL}/shop/products/${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching product by id:', error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/baskets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart:', error);
    return [];
  }
};

export const addToCart = async (product: Product, quantity: number = 1, image: string) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/baskets`, {
      productId: product.id,
      quantity,
      name: product.name,
      price: product.price,
      image,
      description: product.description,
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    throw error;
  }
};

export const removeFromCart = async (id: number) => {
  try {
    const response = await axiosInstance.delete(`${API_URL}/baskets/${id}`);
    console.log('Ответ от сервера:', response); // Логируем ответ
    return response
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};