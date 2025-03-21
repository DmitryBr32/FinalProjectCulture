import { getRecipeByTitleThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./ResponseByTitleForm.module.css";
import OneCoctailCard from "@/widgets/CoctailCard/OneCoctailCard";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";
import { IRecipeArrayType } from "@/entities/recipe/model";

export default function ResponseByTitleForm() {
  const [title, setTitle] = useState<string>("");
  const dispatch = useAppDispatch();
  const rec = useAppSelector((state) => state.recipe.recipe);
  const [recipes, setRecipes] = useState<IRecipeArrayType>([]);

  useEffect(() => {
    if (rec) {
      setRecipes([rec]);
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedRecipeId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipeId(null);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (rec) {
      setRecipes([rec]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.trim().length === 0) {
      console.log("Поля не заполнены");
      return;
    }

    try {
      await dispatch(getRecipeByTitleThunk({ title }));
      console.log("Запрос отправлен");
      //setTitle("");
    } catch (error) {
      console.error("Ошибка запроса", error);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.textWrapper}>
          <p className={styles.searchText}>
            Хотите найти определенный рецепт?
            <div className={styles.smallDivider}></div>
            Воспользуйтесь поиском по названию
          </p>
          {rec && (
            <form onSubmit={handleSubmit} className={styles.addForm}>
              <div className={styles.inputWrapper}>
                <input
                  type="text"
                  id="recipeTitle"
                  className={styles.input}
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Введите название"
                />
                <button type="submit" className={styles.submitButton}>
                  Найти
                </button>
              </div>
            </form>
          )}
        </div>
        {rec ? (
          <OneCoctailCard rec={rec} onOpen={openModal} />
        ) : (
          <form onSubmit={handleSubmit} className={styles.componentContainer}>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                id="recipeTitle"
                className={styles.input}
                value={title}
                onChange={handleTitleChange}
                placeholder="Введите название"
              />
              <button type="submit" className={styles.submitButton}>
                Найти
              </button>
            </div>
          </form>
        )}
      </div>
      {isModalOpen && selectedRecipeId && (
        <ModalRecipe
          isBar={false}
          recipes={recipes}
          recId={selectedRecipeId}
          onClose={closeModal}
          recipesLength={recipes.length}
        />
      )}
    </>
  );
}
