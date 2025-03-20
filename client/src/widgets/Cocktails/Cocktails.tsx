import { useState } from "react";
import AvailableCocktails from "../AvailableCocktails/AvailableCocktails";
import CanBeAvailableCocktails from "../CanBeAvailableCocktails/CanBeAvailableCocktails";
import FavouritesCocktails from "../FavouritesCocktails/FavouritesCocktails";
import styles from "./Cocktails.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { setCocktailSearch } from "@/entities/ingredient/slice/searchSlice";
export default function Cocktails() {
  const [activeTab, setActiveTab] = useState<
    "available" | "canBeAvailable" | "favourites"
  >("available");

  const ingredients = useAppSelector((state) => state.ingredients.ingredients);

  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.search.cocktailSearch);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCocktailSearch(e.target.value));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Коктейли</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "available" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("available")}
        >
          Доступные коктейли
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "canBeAvailable" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("canBeAvailable")}
        >
          Почти доступные
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "favourites" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("favourites")}
        >
          Избранное
        </button>
      </div>
      <label>Поиск по ингредиенту</label>
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        list="ingredientsType"
      />
      <datalist id="ingredientsType">
        {ingredients
          .filter((ingredient) => ingredient.isAlko)
          .map((ingredient) =>
            ingredient.type ? (
              <option key={ingredient.id} value={ingredient.type} />
            ) : null
          )}
      </datalist>

      <div className={styles.content}>
        {activeTab === "available" && (
          <AvailableCocktails searchValue={searchValue} />
        )}
        {activeTab === "canBeAvailable" && (
          <CanBeAvailableCocktails searchValue={searchValue} />
        )}
        {activeTab === "favourites" && (
          <FavouritesCocktails searchValue={searchValue} />
        )}
      </div>
    </div>
  );
}
