import { useState } from "react";
import AvailableCocktails from "../AvailableCocktails/AvailableCocktails";
import CanBeAvailableCocktails from "../CanBeAvailableCocktails/CanBeAvailableCocktails";
import FavouritesCocktails from "../FavouritesCocktails/FavouritesCocktails";
import styles from "./Cocktails.module.css";
export default function Cocktails() {
  const [activeTab, setActiveTab] = useState<
    "available" | "canBeAvailable" | "favourites"
  >("available");
  return (
    <div className={styles.container}>
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
      <div className={styles.content}>
        {activeTab === "available" && <AvailableCocktails />}
        {activeTab === "canBeAvailable" && <CanBeAvailableCocktails />}
        {activeTab === "favourites" && <FavouritesCocktails />}
      </div>
    </div>
  );
}
