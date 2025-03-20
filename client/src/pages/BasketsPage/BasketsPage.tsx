import { JSX, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import {
  removeFromCart,
  updateCartItemQuantity,
  initializeCart,
  clearCart,
} from "@/app/store/cartSlice";
import {
  getCart,
  addToCart as addToCartAPI,
  removeFromCart as removeFromCartAPI,
  addToOrder,
} from "@/shared/api/api";
import styles from "./BasketsPage.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";

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
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

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

    if (existingItem.Product.ShopStorage.quantity < newQuantity) {
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

  const totalPrice = calculateTotalPrice();

  const handleOrderSubmit = async () => {
    await addToOrder(inputs, cart);
    setIsModalOpen(false);
    setInputs(INITIAL_INPUTS_DATA);
    dispatch(clearCart());
    setStep(2);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  if (step === 2) {
    return (
      <div className={styles.container}>
        <div className={styles.notification}>
          <h1>Заказ успешно создан!</h1>
          <nav className={styles.navContainer}>
            <NavLink to={CLIENT_ROUTES.SHOP_FORM}>
              <button>Вернуться в магазин</button>
            </NavLink>
            <NavLink to={CLIENT_ROUTES.ORDERS}>
              <button>Мои заказы</button>
            </NavLink>
          </nav>
        </div>
      </div>
    );
  }

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
                onClick={() =>
                  navigate(`/shop/${product?.Product?.id}?isOpenModal=true`)
                }
              />
              <div className={styles.cartItemDetailsContainer}>
                <h3 className={styles.name}>
                  <strong className={styles.name}>
                    {product.Product?.name}
                  </strong>
                </h3>
                <div className={styles.cartItemDetails}>
                  <div className={styles.detailRow}>
                    <span>Артикул:</span>
                    <span>{product.Product?.article}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Вес:</span>
                    <span>{product.Product?.weight}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Бренд:</span>
                    <span>{product.Product?.brand}</span>
                  </div>
                  <div className={styles.detailRow}>
                    <span>Габариты:</span>
                    <span>{product.Product?.dimensions}</span>
                  </div>
                  <div className={styles.detailRowPrice}>
                    <span>Цена: </span>
                    <span>{product.Product?.price} руб.</span>
                  </div>
                </div>
              </div>
              {/* Контейнер для кнопок */}
              <div className={styles.actionsContainer}>
                <div className={styles.quantityBlock}>
                  <button
                    className={styles.quantityButton}
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
                  <span className={styles.quantityValue}>{product.quantity}</span>
                  <button
                    className={styles.quantityButton}
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
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteProduct(product.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <h3 className={styles.total}>Итого: {totalPrice.toFixed(2)} руб.</h3>
          </div>
          <div>
            <button
              className={styles.orderButton}
              onClick={() => navigate(CLIENT_ROUTES.SHOP_FORM)}
            >
              Продолжить покупки
            </button>
            <button
              className={styles.orderButton}
              onClick={() => setIsModalOpen(true)}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              &#10006;
            </button>
            <h2>Оформить заказ</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleOrderSubmit();
              }}
            >
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
                <label>Комментарий к заказу:</label>
                <input
                  type="text"
                  name="comment"
                  value={inputs.comment}
                  onChange={onChangeHandler}
                />
              </div>
              <h3>Общая сумма: {totalPrice.toFixed(2)} руб.</h3>
              <div className={styles.modalActions}>
                <button
                  type="submit"
                  className={`${styles.button} ${styles.confirmButton}`}
                >
                  Подтвердить заказ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}