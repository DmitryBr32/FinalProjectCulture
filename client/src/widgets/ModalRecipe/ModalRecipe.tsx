import { JSX, useState } from "react";
import styles from "./ModalRecipe.module.css";
import { IRecipe } from "@/entities/recipe";

type Props = {
  recipe: IRecipe | null;
  onClose: () => void;
};

export default function ModalRecipe({ recipe, onClose }: Props): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!recipe) {
    onClose();
  }

  const addToFavorite = () => {
    setIsFavorite((prev) => !prev);
    alert(isFavorite ? "Удален из избранного" : "Добавлен в избранное");
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.modalContent}>
          <div className={styles.modalLeft}>
            <img
              src={recipe?.img}
              alt={recipe?.title}
              className={styles.modalImage}
            />
            <div className={styles.modalPreparation}>
              <h3>Приготовление:</h3>
              <p>{recipe?.text}</p>
            </div>
          </div>
          <div className={styles.modalRight}>
            <h2>{recipe?.title}</h2>
            <div className={styles.modalDescription}>
              <p>{recipe?.text}</p>
            </div>
            <div>
              <h3>Тебе понадобиться:</h3>
              <ul>
                {recipe?.ingredients?.map((ingredient, index) => (
                  <li key={index}>- {ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className={styles.favoriteButton} onClick={addToFavorite}>
          {isFavorite ? (
            <img
              src="../../../public/free-icon-bookmark-4305474.png"
              alt="favorite"
              className={styles.favoriteIcon}
            />
          ) : (
            <img
              src="../../../public/free-icon-bookmark-4305497.png"
              alt="favorite"
              className={styles.favoriteIcon}
            />
          )}
        </button>
      </div>
    </div>
  );
}
