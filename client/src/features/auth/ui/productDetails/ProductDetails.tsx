import { useParams, useNavigate } from "react-router";
import { JSX, useEffect, useState } from "react";
import { getProductById } from "@/shared/api/api";
import { Product } from "@/entities/product/product";
import styles from "./ProductDetails.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { addToCart as addToCartAPI } from "@/shared/api/api";
import { addToCart } from "@/app/store/cartSlice";

export default function ProductDetails(): JSX.Element {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
  const user = useAppSelector((state) => state.user.user);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        console.error("ID товара не определен");
        navigate("/");
        return;
      }

      const id = parseInt(productId as string, 10);
      if (!id) {
        console.error("Неверный ID товара");
        navigate("/");
        return;
      }

      const product = await getProductById(id);
      setProduct(product);
    };

    fetchProduct();
  }, [productId, navigate]);

  const handleQuantityChange = async (product: Product, change: number) => {
    const existingItem = cart.find((item) => item.productId === product.id);
    const currentQuantity = existingItem ? existingItem.quantity : 0;
    const newQuantity = Math.max(currentQuantity + change, 0);

    try {
      await addToCartAPI(product, newQuantity, product.image);
      dispatch(addToCart({ productId: product.id, quantity: newQuantity }));
    } catch (error) {
      console.error("Ошибка при обновлении количества в корзине:", error);
    }
  };

  if (!product) {
    return <div>Загрузка...</div>;
  }

  const cartItem = cart.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>Цена: {product.price} руб.</p>
      {user && (
        <div className={styles.quantityControls}>
          <button
            className={styles.button}
            onClick={() => handleQuantityChange(product, -1)}
            disabled={quantity === 0}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className={styles.button}
            onClick={() => handleQuantityChange(product, 1)}
          >
            +
          </button>
        </div>
      )}
      <button className={styles.button} onClick={() => navigate(-1)}>
        Вернуться в магазин
      </button>
    </div>
  );
}
