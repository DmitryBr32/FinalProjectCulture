import { getRecipeByTitleThunk } from "@/entities/recipe";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import React, { ChangeEvent, useState } from "react";
import styles from "./ResponseByTitleForm.module.css";

export default function ResponseByTitleForm() {
  const [title, setTitle] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
    <div className={styles.form}>
    <form onSubmit={handleSubmit} className={styles.componentContainer}>
      {/* <div className={styles.componentContainer}> */}
        {/* <label htmlFor="recipeTitle" className={styles.label}>
          Название рецепта:
        </label> */}
        <input
          type="text"
          id="recipeTitle"
          className={styles.input}
          value={title}
          onChange={handleTitleChange}
          placeholder="Введите название"
        />
      {/* </div> */}
      <button type="submit" className={styles.submitButton}>
        Найти
      </button>
    </form>
     <p className={styles.searchText}>
     Хотите найти определенный рецепт?
     <div className={styles.smallDivider}></div> 
     Воспользуйся поиском
   </p>
   </div>
  );
}
