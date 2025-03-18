import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import styles from "./AvailableCocktails.module.css";
import { useEffect } from "react";
import { getRecipesThunk } from "@/entities/recipe";
// import { getStockThunk } from "@/entities/stock";

export default function AvailableCocktails() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  // const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getRecipesThunk());
  }, [dispatch, user]);

  console.log(recipes);

  const filteredRecipes = recipes;

  // .filter((recipe) => {
  //   const recipeTypes = recipe.Components.map((comp) => comp.ingredient.type);
  //   return recipe.Components.some((comp) =>
  //     recipeTypes.includes(comp.ingredient.type)
  //   );
  // });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Доступные коктейли</h1>
      <div className={styles.recipesGrid}>
        {Array.isArray(filteredRecipes) && filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
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
