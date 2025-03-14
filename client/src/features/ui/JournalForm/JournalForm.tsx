import { JSX, useEffect, useState } from "react";
import styles from "./JournalForm.module.css";
import { getRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";
import { IRecipe } from "@/entities/recipe/model";

export default function JournalForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes.recipes);

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<IRecipe | null>(null);

  const openModal = (recipe: IRecipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рецепты</h1>
      <div className={styles.filter}>
        <label htmlFor="category">Вид: </label>
        <select id="category">
          <option value="любой">Любые</option>
          <option value="крепкое">Крепкие</option>
          <option value="безалкогольное">Безалкогольные</option>
          <option value="слабоалкогольные">Слабоалкогольные</option>
        </select>
      </div>
      <div className={styles.recipeList}>
        {recipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.img}
              alt={recipe.title}
              className={styles.recipeImage}
            />
            <h3 className={styles.recipeTitle}>{recipe.title}</h3>
            <button
              className={styles.recipeButton}
              onClick={() => openModal(recipe)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModalRecipe recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
  );
}
