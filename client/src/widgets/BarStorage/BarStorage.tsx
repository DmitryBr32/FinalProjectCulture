import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./BarStorage.module.css";
import { useEffect, useState } from "react";
import { deleteStockThunk, getStockThunk } from "@/entities/stock";
import BarAddForm from "../BarAddForm/BarAddForm";

export default function BarStorage() {
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const error = useAppSelector((state) => state.stock.error);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteHandler = async (ingredientId: number) => {
    if (user) {
      await dispatch(deleteStockThunk({ ingredientId, userId: user }));
      await dispatch(getStockThunk(user));
    }
  };

  useEffect(() => {
    if (user) {
      console.log("Fetching stock for user:", user);
      void dispatch(getStockThunk(user));
    }
  }, [dispatch, user]);

  return (
    <div className={styles.container}>
      <h1>Хранилище ваших напитков</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}{" "}
      {!Array.isArray(stock) || stock.length === 0 ? (
        <p>Ваш бар в данный момент пуст</p>
      ) : (
        stock.map((ingredient) => (
          <div key={ingredient.id} className={styles.ingrCard}>
            <div className={styles.ingrHeader}>
              <span className={styles.ingredientType}>
                {ingredient.ingredient.type}
              </span>
              <span className={styles.ingredientTitle}>
                {ingredient.ingredient.title}
              </span>
            </div>
            <div className={styles.ingrBody}>
              <div className={styles.ingredientDetails}>
                <p className={styles.ingredientBalance}>
                  Остаток: {ingredient.ingredientBalance} мл.
                </p>
              </div>
              <div className={styles.ingrImg}>
                <img
                  src="https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/a7/24/15aa8a53a002522a88eee56f35f4.jpg"
                  alt={ingredient.ingredient.title}
                />
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => deleteHandler(ingredient.ingredientId)}
              >
                Закончилось?
              </button>
            </div>
          </div>
        ))
      )}
      {!showAddForm ? (
        <button onClick={() => setShowAddForm(true)}>
          Добавить еще напиток?
        </button>
      ) : (
        <BarAddForm setShowAddForm={setShowAddForm} />
      )}
    </div>
  );
}
