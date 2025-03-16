import { JSX, memo } from "react";
import styles from "./CoctailBox.module.css";
import { IRecipe } from "@/entities/recipe";

type Props = {
  recipe: IRecipe;
};
function IngredientsList({ recipe }: Props): JSX.Element {
  return (
    <ul className={styles.recipeTitle}>
      {recipe?.Components.map((component, index) => (
        <li key={index}>- {component.ingredient.type}</li>
      ))}
    </ul>
  );
}

export default memo(IngredientsList);
