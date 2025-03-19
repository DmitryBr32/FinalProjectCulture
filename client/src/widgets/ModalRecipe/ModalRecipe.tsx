import { JSX, useEffect, useState } from "react";
import styles from "./ModalRecipe.module.css";
import { getRecipeByIdThunk, getUserFavRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import {
  addFavouriteRecipeThunk,
  delFavouriteRecipeThunk,
} from "@/entities/favouriterecipe";
import { IRecipeArrayType } from "@/entities/recipe/model";

type Props = {
  isBar: boolean;
  recipes: IRecipeArrayType;
  recId: number;
  recipesLength: number;
  onClose: () => void;
};

export default function ModalRecipe({
  isBar,
  recipes,
  recId,
  recipesLength,
  onClose,
}: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.user?.id);
  const userFavorites = useAppSelector((state) => state.userfavrecipes.recipes);
  const stock = useAppSelector((state) => state.stock.stock);

  const initialRecipeIndex = recipes.findIndex((recipe) => recipe.id === recId);

  const [recipeIndex, setRecipeIndex] = useState(
    initialRecipeIndex >= 0 ? initialRecipeIndex : 0
  );

  const recipe = recipes[recipeIndex];
  const isFavorite = userFavorites.some(
    (favRecipe) => favRecipe.id === recipe?.id
  );

  useEffect(() => {
    if (userId && recipe?.id) {
      dispatch(getRecipeByIdThunk(recipe.id));
    }
  }, [recipe, userId, dispatch]);

  const switchToFavorite = async () => {
    if (userId && recipe?.id) {
      const action = isFavorite
        ? delFavouriteRecipeThunk({ userId, recipeId: recipe.id })
        : addFavouriteRecipeThunk({ userId, recipeId: recipe.id });

      await dispatch(action);
      dispatch(getUserFavRecipesThunk(userId));
    }
  };

  const handleSubmit = () => {};

  const checkStockAvailability = (
    ingredientId: number,
    requiredQuantity: string
  ) => {
    const stockItem = stock.find(
      (item) => item.ingredientTypeId === ingredientId
    );

    return (
      Number(stockItem!.ingredientBalance) -
      Number(parseFloat(requiredQuantity.replace(",", ".").slice(0, -3)))
    );
  };

  return (
    <div className={styles.modalOverlay}>
      {recipeIndex > 0 && (
        <button onClick={() => setRecipeIndex(recipeIndex - 1)}>&lt;</button>
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
                  {recipe?.Components.map((component, index) => {
                    console.log(component);
                    console.log(component.ingredient.id);
                    console.log(component.quantity);
                    const isAvailable =
                      component.ingredient.isAlko === false ||
                      checkStockAvailability(
                        component.ingredient.id,
                        component.quantity
                      );
                    return isBar ? (
                      <div
                        key={index}
                        className={styles.ingrTable}
                        style={{
                          color: isAvailable ? "" : "red",
                        }}
                      >
                        <div className={styles.ingrName}>
                          - {component.ingredient.type}
                        </div>
                        <div className={styles.ingrQuant}>
                          ({component.quantity})
                        </div>
                      </div>
                    ) : (
                      <div key={index} className={styles.ingrTable}>
                        <div className={styles.ingrName}>
                          - {component.ingredient.type}
                        </div>
                        <div className={styles.ingrQuant}>
                          ({component.quantity})
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {isBar ? (
                <>
                  <p>В данный момент вы можете сделать {} коктейлей</p>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <label>Сколько коктейлей вы хотите сделать?</label>
                      <input type="number" />
                      <button type="submit">Подтвердить</button>
                    </form>
                  </div>
                </>
              ) : (
                ""
              )}
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

      {recipeIndex < recipesLength - 1 && (
        <button onClick={() => setRecipeIndex(recipeIndex + 1)}>&gt;</button>
      )}
    </div>
  );
}
