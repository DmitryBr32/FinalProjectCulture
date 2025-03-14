import { JSX, useEffect, useState } from 'react';
import styles from './ShopForm.module.css';
import { getProducts, getCart } from '@/shared/api/api';
import { Product } from '@/entities/product/product';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHook';
import { addToCart, initializeCart } from '@/app/store/cartSlice';
import { addToCart as addToCartAPI } from '@/shared/api/api';

export default function ShopForm(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
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

    try {
      await addToCartAPI(product, newQuantity, product.image);
      dispatch(addToCart({ productId: product.id, quantity: newQuantity }));
    } catch (error) {
      console.error('Ошибка при обновлении количества в корзине:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Мини - Магазин</h1>
      <div className={styles.content}>
        <div className={styles.productList}>
          <h2>Товары</h2>
          <div className={styles.products}>
            {products.map((product) => {
              const cartItem = cart.find((item) => item.productId === product.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              return (
                <div key={product.id} className={styles.product}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Цена: {product.price} руб.</p>
                  <div className={styles.buttonContainer}>
                    <button className={styles.button}>Подробнее</button>
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
