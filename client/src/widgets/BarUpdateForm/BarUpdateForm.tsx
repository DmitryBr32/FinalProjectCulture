import {
  createIngredientThunk,
  getIngredientsThunk,
} from "@/entities/ingredient";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect, useState } from "react";
import { IIngredientRowData } from "@/entities/ingredient/model";
import { IStock, IStockRowData } from "@/entities/stock/model";
import { createOrUpdateStockThunk, getStockThunk } from "@/entities/stock";

type Props = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  editingId?: number | null;
  initialData?: IStock | null;
};

export default function BarUpdateForm({ setShowAddForm, initialData }: Props) {
  const user = useAppSelector((state) => state.user.user?.id ?? 0);
  const [ingredientInputs, setIngredientInputs] = useState<IIngredientRowData>({
    type: "",
    isAlko: false,
    imgUrl: "",
  });

  const [stockInputs, setStockInputs] = useState<IStockRowData>({
    ingredientTypeId: 0,
    ingredientBalance: "0",
    userId: user,
    title: "",
    strength: "",
  });

  useEffect(() => {
    if (initialData) {
      setIngredientInputs({
        type: initialData.ingredientType?.type || "",
        isAlko: initialData.ingredientType?.isAlko || false,
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
  }, [initialData]);

  const resetForm = () => {
    setIngredientInputs({ type: "", isAlko: false, imgUrl: "" });
    setStockInputs({
      ingredientTypeId: 0,
      ingredientBalance: "0",
      userId: user,
      title: "",
      strength: "",
    });
  };

  const dispatch = useAppDispatch();
  const ingredients =
    useAppSelector((state) => state.ingredients.ingredients) || [];
  console.log(ingredients, "ingredients");

  useEffect(() => {
    void dispatch(getIngredientsThunk());
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;

    if (name === "ingredientBalance") {
      setStockInputs((prev) => ({
        ...prev,
        ingredientBalance: value,
      }));
    } else if (name === "isAlko") {
      setIngredientInputs((prev) => ({
        ...prev,
        isAlko: checked,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existingIngredient = ingredients.find(
        (ingredient) => ingredient.type === ingredientInputs.type
      );
      let ingredientId = existingIngredient?.id;

      if (!ingredientId) {
        const resultIngredient = await dispatch(
          createIngredientThunk(ingredientInputs)
        );
        if (resultIngredient.payload && "id" in resultIngredient.payload) {
          ingredientId = (resultIngredient.payload as { id: number }).id;
        }
      }
      if (ingredientId) {
        const resultStock = await dispatch(
          createOrUpdateStockThunk({
            ingredientTypeId: ingredientId,
            ingredientBalance: stockInputs.ingredientBalance,
            userId: user,
            title: stockInputs.title || ingredientInputs.type,
            strength: stockInputs.strength,
          })
        );
        if (resultStock.payload?.statusCode === 200) {
          setIngredientInputs({ type: "", isAlko: false, imgUrl: "" });
          setStockInputs({
            ingredientTypeId: 0,
            ingredientBalance: "0",
            userId: user,
            title: "",
            strength: "",
          });
          dispatch(getStockThunk(user));
          setShowAddForm(false);
        }
      }
    } catch (error) {
      console.error("Ошибка при добавлении ингредиента:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Введите тип напитка</label>
      <input
        type="text"
        name="type"
        value={ingredientInputs.type}
        onChange={handleChange}
        list="ingredientsType"
        required
      />
      <datalist id="ingredientsType">
        {ingredients.map((ingredient) =>
          ingredient.type ? (
            <option key={ingredient.id} value={ingredient.type} />
          ) : null
        )}
      </datalist>

      <label>Введите марку напитка</label>
      <input
        type="text"
        name="title"
        value={stockInputs.title}
        onChange={handleChange}
        required
      />

      <label>Введите сколько напитка осталось (мл)</label>
      <input
        type="number"
        name="ingredientBalance"
        value={stockInputs.ingredientBalance}
        onChange={handleChange}
        min="0"
      />
      <label>
        Алкогольный:
        <input
          type="checkbox"
          name="isAlko"
          checked={ingredientInputs.isAlko}
          onChange={handleChange}
        />
      </label>

      <label>Введите крепость напитка</label>
      <input
        type="text"
        name="strength"
        value={stockInputs.strength}
        onChange={handleChange}
        required
      />

      <button type="submit">Добавить</button>
    </form>
  );
}
