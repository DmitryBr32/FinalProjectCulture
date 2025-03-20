import { JSX } from "react";
import styles from "./ProductDetailsModal.module.css";
import { Product } from "@/entities/product/product";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import { useNavigate } from "react-router-dom";

interface ProductDetailsModalProps {
  product: Product;
  onClose: () => void;
  handleQuantityChange: (product: Product, change: number) => void;
}

export default function ProductDetailsModal({
  product,
  onClose,
  handleQuantityChange,
}: ProductDetailsModalProps): JSX.Element {
  const cart = useAppSelector((state) => state.cart.items);
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();
  const cartItem = cart.find((item) => item.productId === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Кнопка Закрытия */}
        <button className={styles.closeButton} onClick={onClose}>
          &#10006; {/* Символ крестика */}
        </button>

        <div className={styles.modalBody}>
          {/* Картинка слева */}
          <img
            className={styles.image}
            src={product.image}
            alt={product.name}
          />

          {/* Описание и характеристики справа от картинки */}
          <div className={styles.productDetails}>
            <h1 className={styles.name}>{product.name}</h1>

            {/* Описание */}
            <div className={styles.description}>
              <h3>Описание</h3>
              <p className={styles.descriptionSize}>{product.description}</p>
            </div>

            {/* Характеристики */}
            <div className={styles.specifications}>
              <h3>Общие характеристики</h3>
              <div className={styles.productDetails}>
                <div className={styles.detailItem}>
                  <strong className={styles.label}>Бренд:</strong>
                  <span className={styles.value}>{product.brand}</span>
                </div>
                <div className={styles.detailItem}>
                  <strong className={styles.label}>Материал:</strong>
                  <span className={styles.value}>{product.material}</span>
                </div>
                <div className={styles.detailItem}>
                  <strong className={styles.label}>Размер/Габариты:</strong>
                  <span className={styles.value}>{product.dimensions}</span>
                </div>
                <div className={styles.detailItem}>
                  <strong className={styles.label}>Вес:</strong>
                  <span className={styles.value}>{product.weight} кг</span>
                </div>
              </div>
            </div>
            <p className={styles.price}>Цена: {product.price} руб.</p>

            {/* Кнопки + и - */}
            {user && (
              <div className={styles.controlsWrapper}>
                {quantity > 0 && (
                  <div className={styles.quantityBlock}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(product, -1)}
                      disabled={quantity === 0}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{quantity}</span>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      +
                    </button>
                  </div>
                )}
                <button
                  className={styles.cartButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (quantity === 0) {
                      handleQuantityChange(product, 1);
                    } else {
                      navigate(CLIENT_ROUTES.BASKETS);
                    }
                  }}
                >
                  {quantity === 0 ? "В корзину" : "➜Корзина"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
