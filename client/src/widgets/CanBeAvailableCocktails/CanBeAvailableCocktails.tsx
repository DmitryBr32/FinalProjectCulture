import { getRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect, useState } from "react";
import styles from "./CanBeAvailableCocktails.module.css";
import ModalRecipe from "../ModalRecipe/ModalRecipe";

export default function CanBeAvailableCocktails() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getRecipesThunk());
  }, [dispatch, user]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedRecipeId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipeId(null);
  };
  const filteredRecipes = recipes.filter((recipe) => {
    const recipeIngredients =
      recipe.Components?.map((comp) => comp.ingredient.type) || [];
    const stockIngredients = stock.map((item) => item.ingredientType?.type);
    return recipeIngredients.some((ingredient) =>
      stockIngredients.includes(ingredient)
    );
  });
  return (
    <div className={styles.container}>
      <div className={styles.recipesGrid}>
        {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className={styles.recipeCard}
              onClick={() => openModal(recipe.id)}
            >
              <div className={styles.recipeHeader}>
                <img
                  src={recipe.img || "/default-cocktail.jpg"}
                  alt={recipe.title}
                  className={styles.recipeImage}
                />
                <h2 className={styles.recipeTitle}>{recipe.title}</h2>
              </div>
              <div className={styles.recipeContent}>
                <p className={styles.recipeDescription}>{recipe.text}</p>
                <div className={styles.recipeDetails}>
                  <span className={styles.strengthLevel}>
                    Крепость: {recipe.strengthLevel}
                  </span>
                  {recipe.isShot && (
                    <span className={styles.shotBadge}>Shot</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Нет доступных коктейлей</p>
        )}
      </div>
      {isModalOpen && selectedRecipeId && (
        <ModalRecipe
          recId={selectedRecipeId}
          onClose={closeModal}
          recipesLength={recipes.length}
        />
      )}
    </div>
  );
}
