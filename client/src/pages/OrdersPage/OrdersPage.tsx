import { useEffect, useState } from 'react';
import styles from './OrdersPage.module.css';
import { getOrders } from '@/shared/api/api';

// Определяем интерфейсы
interface Product {
    id: number;
    name: string;
    image: string;
    price: string;
    discount: number;
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

interface Order {
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
}

interface ApiResponse {
    orders: Order[];
}

export default function OrdersPage() {

    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        getAllOrders();
    }, []);

    async function getAllOrders() {
        const result: ApiResponse = await getOrders();
        setOrders(result.orders);
    }

    return (
        <div className={styles.whiteText}>
            <h1>Заказы</h1>
            {orders.map(order => (
                <div key={order.id} className={styles.order}>
                    <h2>Заказ №{order.id}</h2>
                    <p><strong>Адрес:</strong> {order.address}</p>
                    <p><strong>Комментарий:</strong> {order.comment}</p>
                    <p><strong>Дата заказа:</strong> {new Date(order.date).toLocaleDateString()}</p>
                    <p><strong>Получатель:</strong> {order.recipient}</p>
                    <p><strong>Телефон:</strong> {order.telephone}</p>
                    <h3>Товары:</h3>
                    <ul>
                        {order.basket.map(item => (
                            <li key={item.id}>
                                <p><strong>Товар:</strong> {item.Product.name}</p>
                                <p><strong>Количество:</strong> {item.quantity}</p>
                                <p><strong>Цена:</strong> {item.Product.price} руб.</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}