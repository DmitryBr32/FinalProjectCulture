import { IRecipe } from '../model';
import styles from './RecipeCard.module.css';

interface RecipeCardProps {
  recipe: IRecipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{recipe.title}</h2>
    </div>
  );
}
