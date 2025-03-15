import { createIngredientThunk } from "@/entities/ingredient";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useState } from "react";
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
    title: "",
    strength: "",
  });
  const [stockInputs, setStockInputs] = useState<IStockRowData>({
    ingredientId: 0,
    ingredientBalance: "0",
    userId: user,
  });

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "ingredientBalance") {
      setStockInputs((prev) => ({
        ...prev,
        ingredientBalance: value,
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
      console.log("Диспатчим создание ингредиента", ingredientInputs);
      const resultIngredient = await dispatch(
        createIngredientThunk(ingredientInputs)
      );
      console.log("Ответ от сервера (ингредиент):", resultIngredient);

      if (resultIngredient.payload && "id" in resultIngredient.payload) {
        const newIngredientId = (resultIngredient.payload as { id: number }).id;
        console.log("Созданный ingredientId:", newIngredientId);

        console.log("Диспатчим обновление склада");
        console.log(newIngredientId, "newIngredientId");
        console.log(
          stockInputs.ingredientBalance,
          "stockInputs.ingredientBalance"
        );
        console.log(user, "user");

        const resultStock = await dispatch(
          createOrUpdateStockThunk({
            ingredientId: newIngredientId,
            ingredientBalance: stockInputs.ingredientBalance,
            userId: user,
          })
        );
        console.log("Ответ от сервера (склад):", resultStock);

        if (resultStock.payload?.statusCode === 200) {
          console.log("Ингредиент и склад успешно добавлены!");
          setIngredientInputs({ type: "", title: "", strength: "" });
          setStockInputs({
            ingredientId: newIngredientId,
            ingredientBalance: "0",
            userId: user,
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
        required
      />

      <label>Введите марку напитка</label>
      <input
        type="text"
        name="title"
        value={ingredientInputs.title}
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

      <button type="submit">Добавить</button>
    </form>
  );
}
