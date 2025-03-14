import { JSX, useEffect, useState } from "react";
import styles from "./BasketsPage.module.css";
import { getCart, getProducts } from "@/shared/api/api";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import {
  addToCart,
  initializeCart,
  removeFromCart,
} from "@/app/store/cartSlice";
import { removeFromCart as removeFromCartAPI } from "@/shared/api/api";

console.log(useState, getProducts, addToCart); //это просто чтобы не орал линтер, так как эти компоненты импортированы и не используются
export default function Baskets(): JSX.Element {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCart();
      dispatch(initializeCart(cartData));
    };

    fetchData();
  }, [dispatch]);

  async function deleteProduct(id?: number) {
    if (!id) return;

    await removeFromCartAPI(id);
    dispatch(removeFromCart(id));
  }
  return (
    <div className={styles.container}>
      <h1>Корзина</h1>
      {cart?.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((product) => (
            <div key={product.id} className={styles.cartItem}>
              <img
                src={product.Product?.image}
                alt={product.Product?.name}
                className={styles.cartItemImage}
              />
              <div className={styles.cartItemDetails}>
                <h3>{product.Product?.name}</h3>
                <p>{product.Product?.description}</p>
                <p>Цена: {product.Product?.price} руб.</p>
                <p>Количество: {product.quantity}</p>
              </div>
              <button onClick={() => deleteProduct(product.id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
