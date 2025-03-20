import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./AvailableCocktails.module.css";
import { useEffect, useState } from "react";
import { getRecipesThunk, getUserFavRecipesThunk } from "@/entities/recipe";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";
import IngredientsList from "../CoctailCard/IngredientsList";

type Props = {
  searchValue: string;
};

export default function AvailableCocktails({ searchValue }: Props) {
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
    const hasEnoughIngredients = recipe.Components?.every((component) => {
      if (!component.ingredient.isAlko) {
        return true;
      }
      const stockItem = stock.find(
        (item) => item.ingredientType?.type === component.ingredient.type
      );

      if (!stockItem) return false;

      const requiredQuantity = Number(
        parseFloat(component.quantity.replace(",", ".").slice(0, -3))
      );

      const stockQuantity = Number(stockItem.ingredientBalance);

      return stockQuantity >= requiredQuantity;
    });

    const containsSearchedIngredient =
      searchValue.trim() === "" ||
      recipe.Components?.some((component) =>
        component.ingredient.type
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );

    return hasEnoughIngredients && containsSearchedIngredient;
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
                <h1 className={styles.recipeTitle}>{recipe.title}</h1>
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
          isBar={true}
          recipes={filteredRecipes}
          recId={selectedRecipeId}
          onClose={closeModal}
          recipesLength={filteredRecipes.length}
        />
      )}
    </div>
  );
}
