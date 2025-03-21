import { useState } from "react";
import styles from "./DrinkCreateForm.module.css"; // Создайте новый файл стилей для формы напитков

const initialData = {
  name: "",
  description: "",
  imageUrl: "",
  price: 0,
  volume: 0,
  isAlcoholic: false,
};

export default function DrinkCreateForm() {
  const [formData, setFormData] = useState(initialData);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки данных на сервер
    console.log("Form Data Submitted:", formData);
  };

  const handleClearForm = () => {
    setFormData(initialData);
  };

  return (
    <>
        <div className={styles.buttonBlock}>
                <button >Добавить напиток</button>
                <button >Редактировать напиток</button>
        </div>
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Тип напитка"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />

        <input
          placeholder="URL изображения"
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.alcoholic}>
          Алкогольный:
          <input
            type="checkbox"
            name="isAlcoholic"
            checked={formData.isAlcoholic}
            onChange={handleChange}
          />
        </label>

        <button className={styles.buttonUpdate} type="submit">
          Добавить напиток
        </button>

        <button
          className={styles.buttonDelete}
          type="button"
          onClick={handleClearForm}
        >
          Очистить форму
        </button>
      </form>
    </div>
    </>
  );
}