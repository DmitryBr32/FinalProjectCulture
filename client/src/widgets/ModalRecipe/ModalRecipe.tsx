import { JSX } from "react";
import styles from "./ModalRecipe.module.css";
import { IRecipeRowData } from "@/entities/recipe/model";

export default function ModalRecipe({ recipe, onClose }: { recipe: IRecipeRowData, onClose: () => void } ): JSX.Element {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <div className={styles.modalLeft}>
            <img
              src={recipe.img}
              alt={recipe.title}
              className={styles.modalImage}
            />
            <div className={styles.modalPreparation}>
              <h3>Приготовление:</h3>
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <div className={styles.modalRight}>
            <h2>{recipe.title}</h2>
            <div className={styles.modalDescription}>
              <p>{recipe.description}</p>
            </div>
            <div>
              <h3>Тебе понадобиться:</h3>
              <ul>
                {recipe.ingredients?.map((ingredient, index) => ( // не было вопроса после ingredients?
                  <li key={index}>- {ingredient}</li> 
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}