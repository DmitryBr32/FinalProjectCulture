import { JSX, useEffect, useState } from "react";
import styles from "./ModalRecipe.module.css";
import { getRecipeByIdThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";

type Props = {
  recId: number;
  recipesLength: number;
  onClose: () => void;
};

export default function ModalRecipe({
  recId,
  recipesLength,
  onClose,
}: Props): JSX.Element {
  const [isFavorite, setIsFavorite] = useState(false);
  const recipe = useAppSelector((state) => state.recipe.recipe);
  const [recipeId, setRecipeId] = useState(recId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Recipe:", recipeId);
    dispatch(getRecipeByIdThunk(recipeId));
  }, [recipeId, dispatch]);

  const addToFavorite = () => {
    setIsFavorite((prev) => !prev);
    alert(isFavorite ? "Удален из избранного" : "Добавлен в избранное");
  };
  return (
    <div className={styles.modalOverlay}>
      {recipeId > 1 && (
        <button onClick={() => setRecipeId(recipeId - 1)}></button>
      )}
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
              <p>{recipe?.discription}</p>
            </div>
          </div>
          <div className={styles.modalRight}>
            <h2>{recipe?.title}</h2>
            <div className={styles.modalDescription}>
              <p>{recipe?.text}</p>
            </div>
            <div>
              <h3>Тебе понадобятся:</h3>
              <tbody>
                {recipe?.Components.map((component, index) => (
                  <tr key={index}>
                    <td>- {component.ingredient.type}</td>
                    <td> ({component.quantity})</td>
                  </tr>
                ))}
              </tbody>
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
      {recipeId < recipesLength && (
        <button onClick={() => setRecipeId(recipeId + 1)}></button>
      )}
    </div>
  );
}
