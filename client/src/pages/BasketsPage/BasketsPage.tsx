import { JSX, useEffect, useState } from "react";
import styles from "./BasketsPage.module.css";
import { getCart } from "@/shared/api/api";
import { Product } from "@/entities/product/product";

export default function Baskets(): JSX.Element {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await getCart();
        setCartItems(cart);
      } catch (error) {
        console.error("Ошибка при загрузке корзины:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div className={styles.cartItems}>
          {cartItems.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <img
                src={product.image}
                alt={product.name}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Цена: {product.price} руб.</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
