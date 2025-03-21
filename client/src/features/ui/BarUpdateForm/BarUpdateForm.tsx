import {
  createIngredientThunk,
  getIngredientsThunk,
} from "@/entities/ingredient";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useCallback, useEffect, useState } from "react";
import { IIngredientRowData } from "@/entities/ingredient/model";
import { IStock, IStockRowData } from "@/entities/stock/model";
import { updateStockThunk, getStockThunk } from "@/entities/stock";
import styles from "./BarUpdateForm.module.css";

type Props = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  editingId?: number | null;
  initialData?: IStock | null;
};

export default function BarUpdateForm({ setShowAddForm, initialData }: Props) {
  const user = useAppSelector((state) => state.user.user?.id ?? 0);
  const [ingredientInputs, setIngredientInputs] = useState<IIngredientRowData>({
    type: "",
    isAlko: true,
    imgUrl: "",
  });

  const [stockInputs, setStockInputs] = useState<IStockRowData>({
    ingredientTypeId: 0,
    ingredientBalance: "0",
    userId: user,
    title: "",
    strength: "",
  });

  const resetForm = useCallback(() => {
    setIngredientInputs({ type: "", isAlko: true, imgUrl: "" });
    setStockInputs({
      ingredientTypeId: 0,
      ingredientBalance: "0",
      userId: user,
      title: "",
      strength: "",
    });
  }, [user]);
  useEffect(() => {
    if (initialData) {
      setIngredientInputs({
        type: initialData.ingredientType?.type || "",
        isAlko: true,
        imgUrl: initialData.ingredientType?.imgUrl || "",
      });
      setStockInputs({
        ingredientTypeId: initialData.ingredientTypeId,
        ingredientBalance: initialData.ingredientBalance.toString(),
        userId: user,
        title: initialData.title,
        strength: initialData.strength || "",
      });
    } else {
      resetForm();
    }
  }, [initialData, user, resetForm]);

  const dispatch = useAppDispatch();
  const ingredients =
    useAppSelector((state) => state.ingredients.ingredients) || [];

  useEffect(() => {
    void dispatch(getIngredientsThunk());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "ingredientBalance") {
      setStockInputs((prev) => ({
        ...prev,
        ingredientBalance: value,
      }));
    } else if (name === "title" || name === "strength") {
      setStockInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setIngredientInputs((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleClose = () => {
    resetForm();

    setShowAddForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!ingredientInputs.type || !stockInputs.ingredientBalance) {
        throw new Error("Пожалуйста, заполните все обязательные поля");
      }
      const existingIngredient = ingredients.find(
        (ingredient) =>
          ingredient.type.toLowerCase() === ingredientInputs.type.toLowerCase()
      );
      let ingredientId = existingIngredient?.id;
      if (!ingredientId) {
        const resultIngredient = await dispatch(
          createIngredientThunk(ingredientInputs)
        );
        if (resultIngredient.payload && "id" in resultIngredient.payload) {
          ingredientId = (resultIngredient.payload as { id: number }).id;
        } else {
          throw new Error("Ошибка при создании ингредиента");
        }
      }
      if (ingredientId) {
        const resultStock = await dispatch(
          updateStockThunk({
            id: initialData?.id || 0,
            ingredientTypeId: ingredientId,
            ingredientBalance: stockInputs.ingredientBalance,
            userId: user,
            title: stockInputs.title || ingredientInputs.type,
            strength: stockInputs.strength,
          })
        );
        if (resultStock.payload?.data) {
          await dispatch(getStockThunk(user));
          setShowAddForm(false);
        } else {
          setShowAddForm(false);
          throw new Error(
            "Ошибка при обновлении запаса: " +
              (resultStock.payload?.error || "Неизвестная ошибка")
          );
        }
      }
    } catch (error) {
      console.error("Ошибка при обновлении:", error);
      await dispatch(getStockThunk(user));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Введите марку напитка</label>
        <input
          type="text"
          name="title"
          value={stockInputs.title}
          onChange={handleChange}
          required
          className={styles.input}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>
          Введите сколько напитка осталось (мл)
        </label>
        <input
          type="number"
          name="ingredientBalance"
          value={stockInputs.ingredientBalance}
          onChange={handleChange}
          min="0"
          className={styles.input}
        />
      </div>
      <button type="submit" className={styles.button}>
        Обновить
      </button>
      <button type="button" className={styles.delButton} onClick={handleClose}>
        Отменить
      </button>
    </form>
  );
}
