import { getUserFavRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect, useState } from "react";
import styles from "./FavouritesCocktails.module.css";
import ModalRecipe from "../ModalRecipe/ModalRecipe";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";

export default function FavouritesCocktails() {
  const recipes = useAppSelector((state) => state.userfavrecipes.recipes);
  const user = useAppSelector((state) => state.user.user?.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getUserFavRecipesThunk(user));
    }
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

  const handleFavoriteToggle = async (recipeId: number) => {
    if (user) {
      const isFavorite = recipes.some((recipe) => recipe.id === recipeId);
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
  console.log("favrecipes", recipes);

  return (
    <div className={styles.container}>
      <div className={styles.recipesGrid}>
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
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
                <button
                  className={`${styles.favoriteButton} ${
                    recipes.some((fav) => fav.id === recipe.id)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => handleFavoriteToggle(recipe.id)}
                >
                  {recipes.some((fav) => fav.id === recipe.id)
                    ? "Удалить из избранного"
                    : "Добавить в избранное"}
                </button>
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
