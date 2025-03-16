import { Product } from '@/entities/product/product';
import { StorageItem } from '@/pages/ShopStorages/ShopStorageItem';
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

export const getProductById = async (id: number): Promise<Product | null> => {
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
    return response
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

export const addToOrder = async (inputs: object, basket: object) => {
  try {
    const response = await axiosInstance.post(`${API_URL}/order`, {
      ...inputs,
      basket,
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при добавлении в заказы:', error);
    throw error;
  }
};

export const getOrders = async () => {
  try { 
    const response = await axiosInstance.get(`${API_URL}/order`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при добавлении в заказы:', error);
    throw error;
  }
};

export const changeStatusOrder = async ( id: number, status: string) => {
  try { 
    const response = await axiosInstance.post(`${API_URL}/order/status`, {id, status});
    return response.data;
  } catch (error) {
    console.error('Ошибка при изменении статуса заказа:', error);
    throw error;
  }
};

export const deleteOrder = async ( id: number) => {
  try { 
    const response = await axiosInstance.delete(`${API_URL}/order/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    throw error;
  }
};

export const getShopStorage = async () => {
  try { 
    const response = await axiosInstance.get(`${API_URL}/shop-storage`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении данных склада:', error);
    throw error;
  }
};

export const updateShopStorage = async (data: StorageItem) => {
  try { 
    const response = await axiosInstance.post(`${API_URL}/shop-storage`, data);
    return response.data;
  } catch (error) {
    console.error('Ошибка при изменений данных склада:', error);
    throw error;
  }
};

export const deleteShopStorage = async (id: number) => {
  try { 
    const response = await axiosInstance.delete(`${API_URL}/shop-storage/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при удалений данных склада:', error);
    throw error;
  }
};
