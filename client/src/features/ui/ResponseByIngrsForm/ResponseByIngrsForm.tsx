import { IIngredientResArrayType } from "@/entities/ingredient/model";
import { getRecipesByIngrsThunk } from "@/entities/recipe";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import React, { useState } from "react";
import styles from "./ResponseByIngrsForm.module.css";

export default function ResponseByIngrsForm() {
  const [components, setComponents] = useState<IIngredientResArrayType>([
    { type: "" },
  ]);
  const dispatch = useAppDispatch();

  const handleComponentChange = (index: number, value: string) => {
    const newComponents = [...components];
    newComponents[index] = { type: value };
    setComponents(newComponents);
  };

  const addComponent = () => {
    setComponents([...components, { type: "" }]);
  };

  const removeComponent = (index: number) => {
    const newComponents = [...components];
    newComponents.splice(index, 1);
    setComponents(newComponents);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const filteredComponents = components.filter(
      (comp) => comp.type.trim() !== ""
    );

    if (filteredComponents.length === 0) {
      console.log("Поля не заполнены");
      return;
    }
    try {
      await dispatch(getRecipesByIngrsThunk(filteredComponents));
      console.log("Запрос отправлен");
      setComponents([{ type: "" }]);
    } catch (error) {
      console.error("Ошибка запроса", error);
    }
  };

  return (
    <div className={styles.form}>
    <form onSubmit={handleSubmit} className={styles.componentContainer}>
      {components.map((component, index) => (
        <div key={index} className={styles.componentContainer}>
          {/* <label htmlFor={`component-${index}`} className={styles.label}>
            Component {index + 1}:
          </label> */}
          <input
            type="text"
            id={`component-${index}`}
            placeholder="Добавить компонент"
            className={styles.input}
            value={component.type}
            onChange={(e) => handleComponentChange(index, e.target.value)}
          />
          {index > 0 && (
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => removeComponent(index)}
            >
              Удалить
            </button>
          )}
        </div>
      ))}
      <button type="button" className={styles.addButton} onClick={addComponent}>
      Добавить ещё
      </button>
      <button type="submit" className={styles.submitButton}>
        Найти
      </button>
    </form>
    <p className={styles.searchText}>
          Ищешь по любимым ингредиентам? 
          <div className={styles.smallDivider}></div> 
          Просто введи компоненты сюда
        </p>
    </div>
  );
}
