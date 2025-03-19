import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./AvailableCocktails.module.css";
import { useEffect, useState } from "react";
import { getRecipesThunk, getUserFavRecipesThunk } from "@/entities/recipe";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";

export default function AvailableCocktails() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const userFavorites = useAppSelector((state) => state.userfavrecipes.recipes);
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
      recipe.Components?.map((comp) => ({
        type: comp.ingredient.type,
        isAlko: comp.ingredient.isAlko,
      })) || [];
    const stockIngredients = stock.map((item) => item.ingredientType?.type);
    return recipeIngredients.every(
      (ingredient) =>
        !ingredient.isAlko || stockIngredients.includes(ingredient.type)
    );
  });

  const handleFavoriteToggle = async (recipeId: number) => {
    if (user) {
      const isFavorite = userFavorites.some((recipe) => recipe.id === recipeId);
      try {
        const action = isFavorite
          ? delFavouriteRecipeThunk
          : addFavouriteRecipeThunk;

        await dispatch(action({ userId: user, recipeId }));
        await dispatch(getUserFavRecipesThunk(user));
      } catch (error) {
        console.error("Error toggling favorite:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.recipesGrid}>
        {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <div
                className={styles.recipeHeader}
                onClick={() => openModal(recipe.id)}
              >
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
              <button
                className={`${styles.favoriteButton} ${
                  userFavorites.some((fav) => fav.id === recipe.id)
                    ? styles.active
                    : ""
                }`}
                onClick={() => handleFavoriteToggle(recipe.id)}
              >
                {userFavorites.some((fav) => fav.id === recipe.id)
                  ? "Удалить из избранного"
                  : "Добавить в избранное"}
              </button>
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
