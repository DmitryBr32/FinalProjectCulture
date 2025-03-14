import { JSX, useState } from "react";
import styles from "./JournalForm.module.css";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";

  const recipe = 
  [
    {
      "id": 1,
      "title": "Мохито",
      "description": "Описание рецепта Мохито",
      "ingredients": ["Сахар", "Молоко", "Вода"],
      "instructions": "Смешать все ингредиенты и добавить воду по вкусу",
      "image": "1.jpg"
    },
    {
      "id": 2,
      "title": "Палома",
      "description": "Описание рецепта Палома",
      "ingredients": ["Сахар", "Молоко", "Вода"],
      "instructions": "Смешать все ингредиенты и добавить воду по вкусу",
      "image": "2.jpg"
    },
    {
      "id": 3,
      "title": "Б-52",
      "description": "Описание рецепта Б-52",
      "ingredients": ["Сахар", "Молоко", "Вода"],
      "instructions": "Смешать все ингредиенты и добавить воду по вкусу",
      "image": "3.jpg"
    },
    {
      "id": 4,
      "title": "Зеленый дракон",
      "description": "Описание рецепта Зеленый дракон",
      "ingredients": ["Сахар", "Молоко", "Вода"],
      "instructions": "Смешать все ингредиенты и добавить воду по вкусу",
      "image": "4.jpg"
    }
  ]
  export default function JournalForm(): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };
    return (
      <div className={styles.container}>
      <h1 className={styles.title}>Рецепты</h1>
      <div className={styles.filter}>
        <label htmlFor="category">Вид: </label>
        <select id="category">
          <option value="любой">Любые</option>
          <option value="крепкое">Крепкие</option>
          <option value="безалкогольное">Безалкогольные</option>
          <option value="слабоалкогольные">Слабоалкогольные</option>
        </select>
      </div>
      <div className={styles.recipeList}>
        {recipe.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className={styles.recipeImage}
            />
            <h3 className={styles.recipeTitle}>{recipe.title}</h3>
            <button className={styles.recipeButton}  onClick={() => openModal(recipe)}>Подробнее</button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <ModalRecipe recipe={selectedRecipe} onClose={closeModal} />
      )}
    </div>
    );
  }