import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./BarStorage.module.css";
import { useEffect, useState } from "react";
import { deleteStockThunk, getStockThunk } from "@/entities/stock";
import BarAddForm from "../BarAddForm/BarAddForm";
import { getIngredientsThunk } from "@/entities/ingredient";

export default function BarStorage() {
  const stock = useAppSelector((state) => state.stock.stock);
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const error = useAppSelector((state) => state.stock.error);
  const [showAddForm, setShowAddForm] = useState(false);

  const deleteHandler = async (ingredientTypeId: number) => {
    if (user) {
      await dispatch(deleteStockThunk({ ingredientTypeId, userId: user }));
      await dispatch(getStockThunk(user));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          await dispatch(getIngredientsThunk());
          await dispatch(getStockThunk(user));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
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
                {ingredient?.ingredient?.type ||
                  ingredients.find((i) => i.id === ingredient.ingredientTypeId)
                    ?.type ||
                  "Тип не указан"}
              </span>
              <span className={styles.ingredientTitle}>
                {ingredient.title ||
                  ingredient?.ingredient?.type ||
                  "Название не указано"}
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
                  alt={ingredient.title}
                />
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => deleteHandler(ingredient.ingredientTypeId)}
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
