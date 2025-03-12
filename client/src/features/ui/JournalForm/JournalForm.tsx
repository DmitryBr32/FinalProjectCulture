import { JSX } from "react";
import styles from "./JournalForm.module.css";

  const recipe = 
  [
    {
      "id": 1,
      "title": "Мохито",
      "image": "1.jpg"
    },
    {
      "id": 2,
      "title": "Палома",
      "image": "2.jpg"
    },
    {
      "id": 3,
      "title": "Б-52",
      "image": "3.jpg"
    },
    {
      "id": 4,
      "title": "Зеленый дракон",
      "image": "4.jpg"
    }
  ]
  export default function JournalForm(): JSX.Element {
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
        {recipe.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.image}
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