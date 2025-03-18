import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./BarStorage.module.css";
import { useEffect, useState } from "react";
import { deleteStockThunk, getStockThunk, IStock } from "@/entities/stock";
import { getIngredientsThunk } from "@/entities/ingredient";
import BarUpdateForm from "@/features/ui/BarUpdateForm/BarUpdateForm";
import BarAddForm from "@/features/ui/BarAddForm/BarAddForm";
export default function BarStorage() {
  const stock = useAppSelector((state) => state.stock.stock);
  const ingredients = useAppSelector((state) => state.ingredients.ingredients);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const error = useAppSelector((state) => state.stock.error);

  const alkoStock = stock.filter(
    (ingredient) => ingredient.ingredientType?.isAlko
  );

  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [editingStock, setEditingStock] = useState<IStock | null>(null);
  const deleteHandler = async (id: number) => {
    if (!user) return;
    try {
      const stockItem = alkoStock.find((item) => item.id === id);
      if (stockItem) {
        await dispatch(deleteStockThunk({ id: stockItem.id, userId: user }));
        await dispatch(getStockThunk(user));
      }
    } catch (error) {
      console.error("Error deleting stock item:", error);
    }
  };
  const editHandler = (id: number) => {
    const stockItem = alkoStock.find((item) => item.id === id);
    if (stockItem) {
      setEditingStock(stockItem);
      setShowUpdateForm(true);
      setShowAddForm(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          await dispatch(getIngredientsThunk());
          await dispatch(getStockThunk(user));
        } catch (error) {
          console.error("Error fetching", error);
        }
      }
    };
    fetchData();
  }, [dispatch, user]);
  const handleFormClose = () => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setEditingStock(null);
    dispatch(getStockThunk(user!));
  };

  return (
    <div className={styles.container}>
      <h1>Ваши напитки</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      {!showAddForm && !showUpdateForm ? (
        <button
          className={styles.addButton}
          onClick={() => {
            setShowAddForm(true);
            setShowUpdateForm(false);
            setEditingStock(null);
          }}
        >
          Добавить еще напиток
        </button>
      ) : showUpdateForm ? (
        <BarUpdateForm
          setShowAddForm={handleFormClose}
          editingId={editingStock?.id || null}
          initialData={editingStock}
        />
      ) : (
        <BarAddForm
          setShowAddForm={handleFormClose}
          editingId={null}
          initialData={null}
        />
      )}
      <div className={styles.ingredients}>
        {!Array.isArray(alkoStock) || alkoStock.length === 0 ? (
          <p>Ваш бар в данный момент пуст</p>
        ) : (
          alkoStock.map((ingredient) => (
            <div key={ingredient.id} className={styles.ingrCard}>
              <div className={styles.ingrHeader}>
                <span className={styles.ingredientType}>
                  {ingredient?.ingredientType?.type ||
                    ingredients.find(
                      (i) => i.id === ingredient.ingredientTypeId
                    )?.type ||
                    "Тип не указан"}
                </span>
                <span className={styles.ingredientTitle}>
                  {ingredient.title ||
                    ingredient?.ingredientType?.type ||
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
                    src={ingredient.ingredientType.imgUrl}
                    alt={ingredient.title}
                  />
                </div>
                <div className={styles.buttonContainer}>
                  <button onClick={() => editHandler(ingredient.id)}>
                    Отредактировать
                  </button>
                  <button onClick={() => deleteHandler(ingredient.id)}>
                    Закончилось
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
