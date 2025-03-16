import { JSX, useEffect, useState } from "react";
import styles from "./ShopForm.module.css";
import { getCart, getShopStorage } from "@/shared/api/api";
import { Product } from "@/entities/product/product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { addToCart, initializeCart } from "@/app/store/cartSlice";
import { addToCart as addToCartAPI } from "@/shared/api/api";
import { NavLink, useNavigate } from "react-router";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";

export default function ShopForm(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useAppSelector((state) => state.cart.items);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getShopStorage();
      setProducts(products);
      const cartData = await getCart();
      dispatch(initializeCart(cartData));
    };

    fetchData();
  }, [dispatch]);

  const handleQuantityChange = async (product: Product, change: number) => {
    const existingItem = cart.find((item) => item.productId === product.id);
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    const newQuantity = Math.max(currentQuantity + change, 0);

    if (!product.quantity || product.quantity < newQuantity) {
      return;
    }

    try {
      await addToCartAPI(product, newQuantity, product.image);
      dispatch(addToCart({ productId: product.id, quantity: newQuantity }));
    } catch (error) {
      console.error("Ошибка при обновлении количества в корзине:", error);
    }
  };

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.container}>
      <h1>Мини - Магазин</h1>
      <nav className={styles.navContainer}>
        <NavLink
          to={CLIENT_ROUTES.BASKETS}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Корзина
          {totalQuantity > 0 && (
            <span className={styles.cartQuantity}>{totalQuantity}</span>
          )}
        </NavLink>
        <NavLink
          to={CLIENT_ROUTES.ORDERS}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Заказы
        </NavLink>
      </nav>
      <div className={styles.content}>
        <div className={styles.productList}>
          <h2>Товары</h2>
          <div className={styles.products}>
            {products.map((product) => {
              const cartItem = cart.find(
                (item) => item.productId === product.id
              );
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <div
                  key={product.id}
                  className={styles.product}
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.description.slice(0, 20) + "..."}</p>
                  <p>Остаток: {product.quantity} шт.</p>
                  <p>Цена: {product.price} руб.</p>
                  <div className={styles.buttonContainer}>
                    <button className={styles.button}>Подробнее</button>
                    {user && (
                      <div className={styles.quantityControls}>
                        <button
                          className={styles.button}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(product, -1);
                          }}
                          disabled={quantity === 0}
                        >
                          -
                        </button>
                        <div>{quantity}</div>
                        <button
                          className={styles.button}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleQuantityChange(product, 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
