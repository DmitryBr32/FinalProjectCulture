import { JSX, useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { getCart, getShopStorage } from "@/shared/api/api";
import { Product } from "@/entities/product/product";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { addToCart, initializeCart } from "@/app/store/cartSlice";
import { addToCart as addToCartAPI } from "@/shared/api/api";
import { NavLink, useNavigate, useParams } from "react-router"; 
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import ProductDetailsModal from "./ProductDetailsModal";

export default function Shop(): JSX.Element {
  const { productId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const isOpenModal = searchParams.get('isOpenModal');
    if(productId) {
      const [filteredProduct] = products.filter((product) => product.id === Number(productId))
      setSelectedProduct(filteredProduct)
    }

   if(isOpenModal === 'true' && selectedProduct) {
    setIsModalOpen(true)
   }
   
  }, [productId, products, selectedProduct])

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

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    if(productId) {
      navigate(CLIENT_ROUTES.SHOP_FORM)
    }
  };

  return (
    <div className={styles.container}>
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
>
  <div
    className={styles.imageWrapper}
    onClick={() => openModal(product)} // Открытие модального окна
  >
    <img
      src={product.image}
      alt={product.name}
      className={styles.productImage}
    />
    <div className={styles.imageOverlay}>
      <span className={styles.overlayText}>Подробнее</span>
    </div>
  </div>
  <h3>{product.name}</h3>
  <p>{product.description.slice(0, 20) + "..."}</p>
  <p>В наличии: {product.quantity} шт.</p>
  <p>Цена: {product.price} руб.</p>
  <div className={styles.buttonContainer}>
    {user && (
      <div className={styles.controlsWrapper}>
        {/* Блок с кнопками "+", "-" и количеством */}
        {quantity > 0 && (
          <div className={styles.quantityBlock}>
            <button
              className={styles.quantityButton}
              onClick={(e) => {
                e.stopPropagation();
                handleQuantityChange(product, -1);
              }}
            >
              -
            </button>
            <div className={styles.quantityValue}>{quantity}</div>
            <button
              className={styles.quantityButton}
              onClick={(e) => {
                e.stopPropagation();
                handleQuantityChange(product, 1);
              }}
            >
              +
            </button>
          </div>
        )}

        {/* Кнопка "В корзину" или "➜Корзина" */}
        <button
          className={styles.cartButton}
          onClick={(e) => {
            e.stopPropagation();
            if (quantity === 0) {
              handleQuantityChange(product, 1);
            } else {
              navigate(CLIENT_ROUTES.BASKETS); // Переход в корзину
            }
          }}
        >
          {quantity === 0 ? "В корзину" : "➜Корзина"}
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
      {isModalOpen && selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={closeModal}
          handleQuantityChange={handleQuantityChange}
        />
      )}
    </div>
  );
}