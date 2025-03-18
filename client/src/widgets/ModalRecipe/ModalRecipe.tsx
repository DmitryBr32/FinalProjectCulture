import { JSX, useEffect, useState } from "react";
import styles from "./ModalRecipe.module.css";
import { getRecipeByIdThunk, getUserFavRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";

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
  const recipe = useAppSelector((state) => state.recipe.recipe);
  const [recipeId, setRecipeId] = useState(recId);
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.user?.id);
  const userFavorites = useAppSelector((state) => state.userfavrecipes.recipes);

  const isFavorite = userFavorites.some((recipe) => recipe.id === recipeId);

  useEffect(() => {
    if (userId) {
      dispatch(getRecipeByIdThunk(recipeId));
      dispatch(getUserFavRecipesThunk(userId));
    }
  }, [recipeId, userId, dispatch]);

  const switchToFavorite = async () => {
    if (userId) {
      const action = isFavorite
        ? delFavouriteRecipeThunk({ userId: userId, recipeId: recipeId })
        : addFavouriteRecipeThunk({ userId: userId, recipeId: recipeId });

      await dispatch(action);
      dispatch(getUserFavRecipesThunk(userId));
    }
  };

  return (
    <div className={styles.modalOverlay}>
      {recipeId > 1 && (
        <button onClick={() => setRecipeId(recipeId - 1)}></button>
      )}

      <div className={styles.modalContainer}>
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
                <div>
                  {recipe?.Components.map((component, index) => (
                    <div key={index} className={styles.ingrTable}>
                      <div className={styles.ingrName}>
                        - {component.ingredient.type}
                      </div>
                      <div className={styles.ingrQuant}>
                        ({component.quantity})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className={styles.favoriteButton} onClick={switchToFavorite}>
            {isFavorite ? (
              <img
                src="/free-icon-bookmark-4305474.png"
                alt="favorite"
                className={styles.favoriteIcon}
              />
            ) : (
              <img
                src="/free-icon-bookmark-4305497.png"
                alt="favorite"
                className={styles.favoriteIcon}
              />
            )}
          </button>
        </div>
      </div>
      {recipeId < recipesLength && (
        <button onClick={() => setRecipeId(recipeId + 1)}></button>
      )}
    </div>
  );
}
