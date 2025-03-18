import IngredientsList from "./IngredientsList";

import styles from "./CoctailCard.module.css";
import { IRecipe } from "@/entities/recipe";

interface Prop {
  recipe: IRecipe;
  onOpen: (id: number) => void;
}
export default function CoctailCard({ recipe, onOpen }: Prop) {
  return (
    <div className={styles.recipeContainer} onClick={() => onOpen(recipe.id)}>
      <div className={styles.ingrList}>
        <IngredientsList recipe={recipe} />
      </div>
      <div
        className={styles.recipeCard}
        style={{
          backgroundImage: recipe?.img ? `url(${recipe.img})` : "none",
          backgroundSize: "cover",
        }}
      ></div>{" "}
      <h3 className={styles.recipeTitle}>{recipe?.title}</h3>
    </div>
  );
}
