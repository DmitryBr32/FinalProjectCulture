import { JSX, useEffect, useState } from 'react';
import styles from './ShopForm.module.css';
import { getProducts } from '@/shared/api/api';
import { Product } from '@/entities/product/product';
import { useAppDispatch } from '@/shared/hooks/reduxHook';
import { addToCart } from '@/app/store/cartSlice';
import { addToCart as addToCartAPI } from '@/shared/api/api';

export default function ShopForm(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    try {
      await addToCartAPI(product, 1, product.image);
      dispatch(addToCart(product));
      alert(`${product.name} добавлен в корзину!`);
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Мини - Магазин</h1>
      <div className={styles.content}>
        <div className={styles.productList}>
          <h2>Товары</h2>
          <div className={styles.products}>
            {products.map((product) => (
              <div key={product.id} className={styles.product}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Цена: {product.price} руб.</p>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Подробнее</button>
                  <button className={styles.button} onClick={() => handleAddToCart(product)}>
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}