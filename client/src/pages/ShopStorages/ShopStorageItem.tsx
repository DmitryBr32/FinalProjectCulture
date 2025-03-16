import { useState } from "react";
import styles from "./ShopStorages.module.css";

interface Props {
  product: StorageItem;
  onUpdate: (data: StorageItem) => void;
  handleDelete: (id: number) => Promise<void>;
  textFirstButton: string;
  textSecondButton?: string;
  isClearInput?: boolean;
}

export type StorageItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
};

const defaultItem = {
    id: 0,
    name: "",
    image: "",
    price: 0,
    description: "",
    quantity: 0,
  };

export function ShopStorageItem({ product, onUpdate, handleDelete, textFirstButton, textSecondButton, isClearInput }: Props) {
  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price.toString(), 
    description: product.description,
    quantity: product.quantity.toString(),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Преобразуем строки в числа перед отправкой
    const updatedData = {
      ...formData,
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
    };

    onUpdate(updatedData);
    
    if (isClearInput) {
      setFormData({
        id: defaultItem.id,
        name: defaultItem.name,
        image: defaultItem.image,
        price: defaultItem.price.toString(),
        description: defaultItem.description,
        quantity: defaultItem.quantity.toString(),
      });
    }
  };

  return (
    <div className={styles.card}>
      <form onSubmit={handleSubmit}>
        {formData.image && (
          <img
            src={formData.image}
            alt={formData.name}
            className={styles.image}
          />
        )}

        <label>
          Название:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Изображение (URL):
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Цена:
          <input
            min="0"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

        <label>
          Описание:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Количество на складе:
          <input
            min="0"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>

        <button className={styles.buttonUpdate} type="submit">
          {textFirstButton}
        </button>
      </form>
      {textSecondButton && <button
        className={styles.buttonDelete}
        onClick={() => handleDelete(product.id)}
      >
        Удалить
      </button>}
    </div>
  );
}