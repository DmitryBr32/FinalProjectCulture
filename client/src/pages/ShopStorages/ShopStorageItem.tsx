import { useEffect, useState } from "react";
import styles from "./ShopStorages.module.css";

interface Props {
  product: StorageItem;
  onUpdate: (data: StorageItem) => void;
  handleDelete: (id: number | null) => Promise<void>;
  textFirstButton: string;
  textSecondButton?: string;
  isClearInput?: boolean;
}

export type StorageItem = {
  id: number | null;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
  article: string;
  brand?: string;
  material?: string;
  dimensions?: string;
  weight?: string;
};

const defaultItem = {
  id: null,
  name: "",
  image: "",
  price: 0,
  description: "",
  quantity: 0,
  article: "",
  brand: "",
  material: "",
  dimensions: "",
  weight: "",
};

export function ShopStorageItem({
  product,
  onUpdate,
  handleDelete,
  textFirstButton,
  textSecondButton,
  isClearInput,
}: Props) {
  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    image: product.image,
    price: product.price.toString(),
    description: product.description,
    quantity: product.quantity.toString(),
    article: product.article,
    brand: product.brand || "",
    material: product.material || "",
    dimensions: product.dimensions || "",
    weight: product.weight?.toString() || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
        article: defaultItem.article,
        brand: defaultItem.brand,
        material: defaultItem.material,
        dimensions: defaultItem.dimensions,
        weight: defaultItem.weight.toString(),
      });
    }
  };

  function updateFormData(product: StorageItem) {
    setFormData({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price.toString(),
      description: product.description,
      quantity: product.quantity.toString(),
      article: product.article,
      brand: product.brand || "",
      material: product.material || "",
      dimensions: product.dimensions || "",
      weight: product.weight?.toString() || "",
    });
  }

  useEffect(() => {
    updateFormData(product);
  }, [product]);

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

        <input
          placeholder="Название:"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          placeholder="Изображение: (URL)"
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input
          placeholder="Цена:"
          min="0"
          type="number"
          name="price"
          value={formData.price === "0" ? "" : formData.price}
          onChange={handleChange}
        />

        <input
          placeholder="Количество на складе:"
          min="0"
          type="number"
          name="quantity"
          value={formData.quantity === "0" ? "" : formData.quantity}
          onChange={handleChange}
        />

        <input
          placeholder="Артикул:"
          type="text"
          name="article"
          value={formData.article}
          onChange={handleChange}
        />

        <input
          placeholder="Бренд:"
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />

        <input
          placeholder="Материал:"
          type="text"
          name="material"
          value={formData.material}
          onChange={handleChange}
        />

        <input
          placeholder="Размеры:"
          type="text"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
        />

        <input
          placeholder="Вес:"
          min="0"
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <textarea
          placeholder="Описание:"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <button className={styles.buttonUpdate} type="submit">
          {textFirstButton}
        </button>
      </form>

      {textSecondButton && (
        <button
          className={styles.buttonDelete}
          onClick={() => handleDelete(product.id)}
        >
          Удалить
        </button>
      )}
    </div>
  );
}
