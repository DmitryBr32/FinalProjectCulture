import { useEffect, useState } from "react";
import styles from "./OrdersPage.module.css";
import { getOrders } from "@/shared/api/api";
import { OneOrder } from "./OneOrder";
import { useAppSelector } from "@/shared/hooks/reduxHook";

// Определяем интерфейсы
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface BasketItem {
  id: number;
  productId: number;
  quantity: number;
  Product: Product;
  createdAt: string;
  updatedAt: string;
  userId: number;
}

export interface Order {
  id: number;
  address: string;
  basket: BasketItem[];
  comment: string;
  createdAt: string;
  date: string;
  recipient: string;
  telephone: string;
  updatedAt: string;
  userId: number;
  status: string;
}

interface ApiResponse {
  orders: Order[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const user = useAppSelector((state) => state.user.user);

  function deleteOneOrder(id: number) {
    const filteredOrders = orders.filter((order) => order.id !== id);
    setOrders(filteredOrders);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  async function getAllOrders() {
    const result: ApiResponse = await getOrders();
    setOrders(result.orders);
  }

  return (
    <div className={styles.container}>
      <h1>Заказы</h1>
      {orders.map((order) => (
        <OneOrder
          key={order.id}
          order={order}
          deleteOneOrder={deleteOneOrder}
          isAdmin={user?.isAdmin}
        />
      ))}
    </div>
  );
}
