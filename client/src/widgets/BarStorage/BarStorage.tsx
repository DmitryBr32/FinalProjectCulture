import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./BarStorage.module.css";
import { useEffect } from "react";
import { getStockThunk } from "@/entities/stock";

export default function BarStorage() {
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const error = useAppSelector((state) => state.stock.error);

  useEffect(() => {
    if (user) {
      console.log("Сток юзера:", user);
      dispatch(getStockThunk(user));
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log("stock обновился:", stock);
  }, [stock]);

  return (
    <div className={styles.container}>
      <h1>Хранилище ваших напитков</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}{" "}
      {!Array.isArray(stock) || stock.length === 0 ? (
        <p>Нет данных для отображения</p>
      ) : (
        stock.map((ingredient) => (
          <div key={ingredient.id} className={styles.ingrCard}>
            <p>type: {ingredient.ingredient.type} мл</p>
            <p>title: {ingredient.ingredient.title} мл</p>
            <p>Остаток: {ingredient.ingredientBalance} мл</p>
          </div>
        ))
      )}
    </div>
  );
}
