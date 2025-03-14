import { JSX, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { removeFromCart, updateCartItemQuantity, initializeCart, clearCart } from "@/app/store/cart";
import { getCart, addToCart as addToCartAPI, removeFromCart as removeFromCartAPI, addToOrder } from "@/shared/api/api";
import styles from "./BasketsPage.module.css";

const INITIAL_INPUTS_DATA = {
  name: "",
  address: "",
  telephone: "",
  date: "",
  comment: "",
};

export default function Baskets(): JSX.Element {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputs, setInputs] = useState(INITIAL_INPUTS_DATA);

  useEffect(() => {
    const fetchData = async () => {
      const cartData = await getCart();
      dispatch(initializeCart(cartData));
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(`.${styles.modalContent}`);
      if (modal && !modal.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.Product?.price ? parseFloat(item.Product.price) : 0;
      return total + price * item.quantity;
    }, 0);
  };

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
        console.error('Цена товара некорректна');
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

      dispatch(updateCartItemQuantity({ id: productId, quantity: newQuantity }));
    } catch (error) {
      console.error('Ошибка при обновлении количества в корзине:', error);
    }
  };

  const totalPrice = calculateTotalPrice();

  const handleOrderSubmit = async() => {
   
    await addToOrder(inputs, cart)
    setIsModalOpen(false);
    setInputs(INITIAL_INPUTS_DATA)
    dispatch(clearCart())
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className={styles.container}>
      <h1>Корзина</h1>
      {cart?.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <div className={styles.cartItems}>
          {cart.map((product, index) => (
            <div key={product.id || index} className={styles.cartItem}>
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
          <div className={styles.total}>
            <h3>Общая сумма: {totalPrice.toFixed(2)} руб.</h3>
          </div>
          <button className={styles.orderButton} onClick={() => setIsModalOpen(true)}>
            Оформить заказ
          </button>
        </div>
      )}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
          <h3>Общая сумма: {totalPrice.toFixed(2)} руб.</h3>
            <h2>Оформить заказ</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleOrderSubmit(); }}>
              <div className={styles.formField}>
                <label>Имя получателя:</label>
                <input
                  type="text"
                  name="name"
                  value={inputs.name}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Адрес:</label>
                <input
                  type="text"
                  name="address"
                  value={inputs.address}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Номер телефона:</label>
                <input
                  type="tel"
                  name="telephone"
                  value={inputs.telephone}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Дата доставки:</label>
                <input
                  type="date"
                  name="date"
                  value={inputs.date}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className={styles.formField}>
                <label>Коментарий к заказу:</label>
                <input
                  type="text"
                  name="comment"
                  value={inputs.comment}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className={styles.modalActions}>
                <button type="submit"  className={`${styles.button} ${styles.confirmButton}`}>
                  Подтвердить заказ
                </button>
                <button
                  type="button"
                  className={`${styles.button} ${styles.cancelButton}`}
                  onClick={() => setIsModalOpen(false)}
                >
                  Закрыть
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}