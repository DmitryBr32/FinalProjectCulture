import styles from "./RecipeCrud.module.css";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import RecipeUpdateForm from "./RecipeUpdateForm";
import RecipeCreateForm from "./RecipeCreateForm";
import { useState } from "react";

export default function RecipeCrud() {
  const recipe = useAppSelector((state) => state.recipe.recipe);
  const [updateForm, setForm] = useState(false);

  const handleUpdateClick = () => {
    setForm(!updateForm);
  };

  return (
    <div className={styles.container}>
      <h2>{recipe?.id}</h2>
      <div className={styles.buttonBlock}>
        <button onClick={handleUpdateClick}>Добавить рецепт</button>
        <button onClick={handleUpdateClick}>Редактировать рецепт</button>
      </div>
      {/* {recipe && updateForm && <RecipeUpdateForm recipeId={recipe.id} />}

      {!updateForm && <RecipeCreateForm />} */}
      <RecipeUpdateForm />
      <RecipeCreateForm />
    </div>
  );
}
