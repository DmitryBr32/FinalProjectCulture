import { JSX, useEffect } from "react";
import styles from "./JournalForm.module.css";
import { getRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
//import { useAppDispatch } from "@/shared/hooks/reduxHook";

export default function JournalForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes.recipes);

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

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
            <button className={styles.recipeButton}>Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}
