import { getUserFavRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { useEffect } from "react";
import styles from "./FavouritesCocktails.module.css";

export default function FavouritesCocktails() {
  const recipes = useAppSelector((state) => state.userfavrecipes.recipes);
  const user = useAppSelector((state) => state.user.user?.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getUserFavRecipesThunk(user));
    }
  }, [dispatch, user]);

  console.log("favrecipes", recipes);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Избранные коктейли</h1>
      <div className={styles.recipesGrid}>
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className={styles.recipeCard}>
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
    </div>
  );
}
