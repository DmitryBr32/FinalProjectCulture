import { createRecipeThunk } from "@/entities/recipe";
import { IRecipeRowData } from "@/entities/recipe/model";
import { useAppDispatch } from "@/shared/hooks/reduxHook";
import { useState } from "react";
import styles from "./RecipeCrud.module.css";

const initialData: IRecipeRowData = {
  title: "",
  text: "",
  discription: "",
  imgBar: "",
  img: "",
  strengthLevel: "",
  isShot: false,
  likes: 0,
  Components: [],
};
export default function RecipeCreateForm() {
  const [formData, setFormData] = useState(initialData);
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createRecipeThunk(formData));
  };

  const handleClearForm = () => {
    setFormData(initialData);
  };

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
          placeholder="Title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={styles.input}
        />

        <textarea
          placeholder="Description"
          name="discription"
          value={formData.discription}
          onChange={handleChange}
          className={styles.textarea}
        />

        <textarea
          placeholder="Text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          className={styles.textarea}
        />

        <input
          placeholder="Image URL"
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          placeholder="Strength Level"
          type="text"
          name="strengthLevel"
          value={formData.strengthLevel}
          onChange={handleChange}
          className={styles.input}
        />

        <label>
          Is Shot:
          <input
            type="checkbox"
            name="isShot"
            checked={formData.isShot}
            onChange={handleChange}
          />
        </label>

        <button className={styles.buttonUpdate} type="submit">
          Update Recipe
        </button>

        <button
          className={styles.buttonDelete}
          type="button" // Important: Use type="button" to prevent form submission
          onClick={() => handleClearForm()}
        >
          Delete Recipe
        </button>
      </form>
    </div>
  );
}
