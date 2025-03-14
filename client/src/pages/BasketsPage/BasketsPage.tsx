import { JSX, useEffect } from "react";
import styles from "./BasketsPage.module.css";
import { getCart, addToCart as addToCartAPI } from "@/shared/api/api";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import {
  initializeCart,
  removeFromCart,
  updateCartItemQuantity,
} from "@/app/store/cartSlice";
import { removeFromCart as removeFromCartAPI } from "@/shared/api/api";

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

  const handleQuantityChange = async (productId: number, change: number) => {
    const existingItem = cart.find((item) => item.id === productId);
    if (!existingItem || !existingItem.Product) return;

    const currentQuantity = existingItem.quantity;
    const newQuantity = Math.max(currentQuantity + change, 0);

    if (newQuantity === 0) {
      await deleteProduct(productId);
      return;
    }

    try {
      const price = parseFloat(existingItem.Product.price);
      if (isNaN(price)) {
        console.error("Цена товара некорректна");
        return;
      }

      await addToCartAPI(
        {
          ...existingItem.Product,
          price,
        },
        newQuantity,
        existingItem.Product.image
      );

      dispatch(
        updateCartItemQuantity({ id: productId, quantity: newQuantity })
      );
    } catch (error) {
      console.error("Ошибка при обновлении количества в корзине:", error);
    }
  };

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
                <div className={styles.quantityControls}>
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.id !== undefined) {
                        handleQuantityChange(product.id, -1);
                      }
                    }}
                    disabled={product.quantity === 0}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (product.id !== undefined) {
                        handleQuantityChange(product.id, 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button onClick={() => deleteProduct(product.id)}>Удалить</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
