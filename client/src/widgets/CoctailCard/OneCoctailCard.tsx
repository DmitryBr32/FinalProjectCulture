import IngredientsList from "./IngredientsList";

import styles from "./CoctailCard.module.css";
import { IRecipe } from "@/entities/recipe";

interface Prop {
  rec: IRecipe;
  onOpen: (id: number) => void;
}
export default function OneCoctailCard({ rec, onOpen }: Prop) {
  return (
    <div className={styles.oneRecipeContainer} onClick={() => onOpen(rec.id)}>
      <div className={styles.oneIngrList}>
        <IngredientsList recipe={rec} />
      </div>
      <div
        className={styles.oneRecipeCard}
        style={{
          backgroundImage: rec?.img ? `url(${rec.img})` : "none",
          backgroundSize: "cover",
        }}
      ></div>{" "}
      <div className={styles.oneRecipeTitle}>{rec?.title}</div>
    </div>
  );
}
