import { deleteRecipeThunk, updateRecipeByIdThunk } from "@/entities/recipe";
import { IRecipeRowData } from "@/entities/recipe/model";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import styles from "./RecipeCrud.module.css";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { IIngredientResArrayType } from "@/entities/ingredient/model";

const initialData: IRecipeRowData = {
  title: "",
  text: "",
  discription: "",
  img: "",
  strengthLevel: "",
  isShot: false,
  likes: 0,
  Components: [],
};

// type Prop = {
//   recipeId: number;
// };

export default function RecipeUpdateForm() {
  const [formData, setFormData] = useState(initialData);
  const dispatch = useAppDispatch();
  const [components, setComponents] = useState<IIngredientResArrayType>([
    { type: "" },
  ]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const recipeId = 1;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: target.checked,
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(updateRecipeByIdThunk({ id: recipeId, recipeData: formData }));
  };

  const handleClearForm = () => {
    setFormData(initialData);
    setComponents([{ type: "" }]);
  };

  const handleDelete = (recipeId: number) => {
    dispatch(deleteRecipeThunk(recipeId));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
    }
  }, [components]);

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        {formData.img && (
          <img
            src={formData.img}
            alt={formData.title}
            className={styles.image}
          />
        )}

        <input
          placeholder="Название:"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          placeholder="Короткое описание:"
          name="text"
          value={formData.text}
          onChange={handleChange}
          className={styles.textarea}
        />

        <textarea
          placeholder="Способ приготовления:"
          name="discription"
          value={formData.discription}
          onChange={handleChange}
          className={styles.textarea}
        />

        <input
          placeholder="URL изображения:"
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className={styles.input}
        />

        <div className={styles.filter}>
          <label htmlFor="strength">По крепости </label>
          <select
            id="strength"
            name="strengthLevel"
            value={formData.strengthLevel}
            onChange={handleSelectChange}
          >
            <option value="крепкий">Крепкий</option>
            <option value="средний">Средний</option>
            <option value="слабый">Легкий</option>
          </select>
        </div>

        <div className={styles.checkbox}>
          <div>Шот дринк?</div>

          <label className={styles.check}>
            <input
              type="checkbox"
              name="isShot"
              checked={formData.isShot}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={styles.componentContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
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
                    <label
                      htmlFor={`component-${index}`}
                      className={styles.label}
                    ></label>
                    <input
                      type="text"
                      placeholder={`Напиток ${index + 1}`}
                      id={`component-${index}`}
                      className={styles.input}
                      value={component.type}
                      onChange={(e) =>
                        handleComponentChange(index, e.target.value)
                      }
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className={styles.removeButton}
                        onClick={() => removeComponent(index)}
                      >
                        Убрать
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.buttonBlock}>
              <button
                type="button"
                className={styles.addButton}
                onClick={addComponent}
              >
                Добавить напиток
              </button>
              <button type="submit" className={styles.submitButton}>
                Подтвердить
              </button>
            </div>
          </form>
        </div>

        <button className={styles.buttonUpdate} type="submit">
          Обновить рецепт
        </button>

        <button
          className={styles.buttonDelete}
          type="button"
          onClick={() => handleClearForm()}
        >
          Очистить поля
        </button>

        <button
          className={styles.buttonDelete}
          type="button"
          onClick={() => handleDelete(recipeId)}
        >
          Удалить рецепт
        </button>
      </form>
    </div>
  );
}
