import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./BarStorage.module.css";
import { useEffect, useState } from "react";
import { getStockThunk } from "@/entities/stock";
import BarAddIngredientForm from "../BarAddIngredientForm/BarAddIngredientForm";

export default function BarStorage() {
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const error = useAppSelector((state) => state.stock.error);
  const [showAddForm, setShowAddForm] = useState(false);

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
        <p>Нет данных для отображения</p>
      ) : (
        stock.map((ingredient) => (
          <div key={ingredient.id} className={styles.ingrCard}>
            <span> {ingredient.ingredient.type} </span>
            <span> {ingredient.ingredient.title} </span>
            <p>Остаток: {ingredient.ingredientBalance} мл. </p>
          </div>
        ))
      )}
      {!showAddForm ? (
        <button onClick={() => setShowAddForm(true)}>
          Добавить еще напиток?
        </button>
      ) : (
        <BarAddIngredientForm />
      )}
    </div>
  );
}
