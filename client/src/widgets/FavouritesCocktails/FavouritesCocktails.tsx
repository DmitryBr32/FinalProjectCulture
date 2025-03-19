import { getUserFavRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect, useState } from "react";
import styles from "./FavouritesCocktails.module.css";
import ModalRecipe from "../ModalRecipe/ModalRecipe";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";
import IngredientsList from "../CoctailCard/IngredientsList";

export default function FavouritesCocktails() {
  const favResipes = useAppSelector((state) => state.userfavrecipes.recipes);
  const recipes = useAppSelector((state) => state.recipes.recipes);
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
      const isFavorite = favResipes.some((recipe) => recipe.id === recipeId);
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

  const favRecipeIds = favResipes.map((fav) => fav.id);
  const filteredRecipes = recipes.filter((recipe) =>
    favRecipeIds.includes(recipe.id)
  );

  return (
    <div className={styles.container}>
      <div className={styles.recipesGrid}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
              <div
                className={styles.recipeHeader}
                onClick={() => openModal(recipe.id)}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={recipe.img || "/default-cocktail.jpg"}
                    alt={recipe.title}
                    className={styles.recipeImage}
                  />
                  <div className={styles.ingredientsOverlay}>
                    <div className={styles.ingrList}>
                      <IngredientsList recipe={recipe} />
                    </div>
                  </div>
                </div>
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
                    favResipes.some((fav) => fav.id === recipe.id)
                      ? styles.active
                      : ""
                  }`}
                  onClick={() => handleFavoriteToggle(recipe.id)}
                >
                  {favResipes.some((fav) => fav.id === recipe.id)
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
          recipes={filteredRecipes}
          recId={selectedRecipeId}
          onClose={closeModal}
          recipesLength={filteredRecipes.length}
        />
      )}
    </div>
  );
}
