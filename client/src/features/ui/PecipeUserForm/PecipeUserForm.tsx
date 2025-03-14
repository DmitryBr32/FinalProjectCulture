import { JSX } from "react";
import styles from "./PecipeUserForm.module.css";
const userRecipe = [
    {
        id: 1,
        username: "Игорь",
        title: "Мохито",
        image: "1.jpg"
    },
    {
        id: 2,
        username: "Роман",
        title: "Палома",
        image: "2.jpg"
    },
    {
        id: 3,
        username: "Кирилл",
        title: "Зеленый дракон",
        image: "4.jpg"
    }
]

export default function RecipeUserForm(): JSX.Element {
    return (
      <div className={styles.userRecipes}>
      <h2 className={styles.userRecipesTitle}>Рецепты пользователей</h2>
      <div className={styles.userRecipeList}>
        {userRecipe.map((userRecipe) => (
          <div key={userRecipe.id} className={styles.userRecipeCard}>
            <img
              src={userRecipe.image}
              alt={userRecipe.title}
              className={styles.userRecipeImage}
            />
            <div className={styles.userRecipeContent}>
              <p className={styles.userRecipeName}>{userRecipe.username} бахнул:</p>
              <h3 className={styles.userRecipeTitle}>{userRecipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
