import {
  createIngredientThunk,
  getIngredientsThunk,
} from "@/entities/ingredient";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect, useState } from "react";
import { IIngredientRowData } from "@/entities/ingredient/model";
import { IStockRowData } from "@/entities/stock/model";
import { createOrUpdateStockThunk, getStockThunk } from "@/entities/stock";

type Props = {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function BarAddForm({ setShowAddForm }: Props) {
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log("Проверяем существующий ингредиент:", ingredientInputs.type);
      const existingIngredient = ingredients.find(
        (ingredient) => ingredient.type === ingredientInputs.type
      );

      let ingredientId = existingIngredient?.id;

      if (!ingredientId) {
        console.log("Диспатчим создание нового ингредиента");
        const resultIngredient = await dispatch(
          createIngredientThunk(ingredientInputs)
        );
        console.log("Ответ от сервера (ингредиент):", resultIngredient);

        if (resultIngredient.payload && "id" in resultIngredient.payload) {
          ingredientId = (resultIngredient.payload as { id: number }).id;
        }
      }

      if (ingredientId) {
        console.log("Диспатчим обновление склада");

        const resultStock = await dispatch(
          createOrUpdateStockThunk({
            ingredientTypeId: ingredientId,
            ingredientBalance: stockInputs.ingredientBalance,
            userId: user,
            title: stockInputs.title,
            strength: stockInputs.strength,
          })
        );
        console.log("Ответ от сервера (склад):", resultStock);

        if (resultStock.payload?.statusCode === 200) {
          console.log("Ингредиент и склад успешно добавлены/обновлены!");
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
