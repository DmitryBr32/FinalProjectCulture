import { JSX } from 'react';
import styles from './ShopForm.module.css';

export default function ShopForm(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Мини - Магазин</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Поиск по названию..." />
      </div>
      <div className={styles.content}>
        <div className={styles.categories}>
          <h2>Категории</h2>
          <ul>
            <li>Шейкеры</li>
            <li>Наборы</li>
          </ul>
        </div>
        <div className={styles.productList}>
          <h2>Товары</h2>
          <div className={styles.products}>
            <div className={styles.product}>
              <img src="https://avatars.mds.yandex.net/get-mpic/4401552/2a00000193bd67b5f1cbe2a8a4363b4e0d64/optimize" alt="Продукт 1" className={styles.productImage} />
              <h3>Шейкер</h3>
              <p>Описание продукта 1</p>
              <p>Цена: 500 руб.</p>
              <button>Подробнее</button>
            </div>
            <div className={styles.product}>
              <img src="https://avatars.mds.yandex.net/get-mpic/5280162/img_id3165987397582084439.jpeg/orig" alt="Продукт 2" className={styles.productImage} />
              <h3>Набор для бара</h3>
              <p>Описание продукта 2</p>
              <p>Цена: 2000 руб.</p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}