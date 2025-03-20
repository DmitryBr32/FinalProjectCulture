import { IIngredientResArrayType } from "@/entities/ingredient/model";
import { getRecipesByIngrsThunk } from "@/entities/recipe";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ResponseByIngrsForm.module.css";

export default function ResponseByIngrsForm() {
  const [components, setComponents] = useState<IIngredientResArrayType>([
    { type: "" },
  ]);
  const dispatch = useAppDispatch();
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
    }
  }, [components]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* <div className={styles.container}> */}
      <div className={styles.textWrapper}>
        <p className={styles.searchText}>
          Хотите найти рецепт по предпочтениям?
          <div className={styles.smallDivider}></div>
          Воспользуйтесь поиском по компонентам
        </p>
      </div>
      {/* </div> */}
      <div className={styles.inputContainer}>
      <div className={styles.inputBlock}>
        <div
          className={
            components.length > 1
              ? styles.carouselContainer
              : styles.carouselContainerClose
          }
        >
          <div className={styles.carousel} ref={carouselRef}>
            {components.map((component, index) => (
              <div key={index} className={styles.componentContainer}>
                {/* <label
                htmlFor={`component-${index}`}
                className={styles.label}
              ></label> */}
                <input
                  type="text"
                  placeholder={`Напиток ${index + 1}`}
                  id={`component-${index}`}
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
                    x
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className={styles.buttonBlock}> */}
          <button
            type="button"
            className={styles.addButton}
            onClick={addComponent}
          >
            Добавить компонент
          </button>
          </div>
          <button type="submit" className={styles.submitButton}>
            Найти сочетания
          </button>
        </div>
      {/* </div> */}
    </form>
  );
}
