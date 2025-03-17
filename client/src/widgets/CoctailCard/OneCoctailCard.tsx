import IngredientsList from "./IngredientsList";

import styles from "./CoctailCard.module.css";
import { IRecipe } from "@/entities/recipe";

interface Prop {
  rec: IRecipe;
  onOpen: (id: number) => void;
}
export default function OneCoctailCard({ rec, onOpen }: Prop) {
  return (
    <div className={styles.recipeContainer} onClick={() => onOpen(rec.id)}>
      <div className={styles.ingrList}>
        <IngredientsList recipe={rec} />
      </div>
      <div
        className={styles.recipeCard}
        style={{
          backgroundImage: rec?.img ? `url(${rec.img})` : "none",
          backgroundSize: "cover",
        }}
      ></div>{" "}
      <h3 className={styles.recipeTitle}>{rec?.title}</h3>
    </div>
  );
}
