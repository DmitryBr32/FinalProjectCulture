import {
  deleteShopStorage,
  getShopStorage,
  updateShopStorage,
} from "@/shared/api/api";
import styles from "./ShopStorages.module.css";
import { useEffect, useState } from "react";
import { ShopStorageItem, StorageItem } from "./ShopStorageItem";
import { useAlert } from "@/features/alert";

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

export function ShopStorages() {
  const [products, setProducts] = useState<StorageItem[] | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<StorageItem | null>(
    null
  );
  const [mode, setMode] = useState<"add" | "edit">("add");
  const { showAlert } = useAlert();

  async function getShopStorageData() {
    const response = await getShopStorage();
    setProducts(response);
  }

  useEffect(() => {
    getShopStorageData();
  }, []);

  const handleUpdate = async (data: StorageItem) => {
    if (!data.name || !data.price) {
      console.error("Некорректные данные для обновления карточки!");
      return;
    }

    try {
      if (mode === "edit") {
        await updateShopStorage(data);
        const updatedProducts = products?.map((product) =>
          product.id === data.id ? data : product
        );
        setProducts(updatedProducts ?? null);
        showAlert(`Карточка "${data.name}" успешно обновлена!`);
      } else if (mode === "add") {
        await updateShopStorage(data); // Здесь предполагаем, что для добавления также используется updateShopStorage
        setProducts((prevProducts) =>
          prevProducts ? [...prevProducts, data] : [data]
        );
        showAlert(`Карточка "${data.name}" успешно создана!`);
      }

      
    } catch (error) {
      console.error("Ошибка при обновлении данных склада:", error);
    }
  };

  const handleDelete = async (id: number | null) => {
    if (!id) {
      return;
    }
    await deleteShopStorage(id);
    const filteredProducts = products?.filter((product) => product.id !== id);
    setProducts(filteredProducts ?? null);
    setSelectedProduct(null); // Сброс выбора после удаления
    showAlert("Карточка успешно удалена!");
  };

  const handleAddNewCard = () => {
    setMode("add");
    setSelectedProduct(null);
  };

  const handleEditCard = () => {
    getShopStorageData()
    setMode("edit");
  };

  return (
    <div className={styles.container}>
      <h2>Склад</h2>
      <div className={styles.buttonBlock}>
        <button onClick={handleAddNewCard}>Добавить карточку</button>
        <button onClick={handleEditCard}>Редактировать карточку</button>
      </div>

      {mode === "edit" && (
        <select
          onChange={(e) => {
            const selectedId = parseInt(e.target.value, 10);
            const selected =
              products?.find((product) => product.id === selectedId) || null;
            setSelectedProduct(selected);
          }}
        >
          <option value="">Выберите карточку</option>
          {products?.map((product) => (
              product?.id && (
                <option  key={product.article} value={product?.id}>
                  {product.name}
                </option>
              )
            
          ))}
        </select>
      )}

      {(mode === "add" || selectedProduct) && (
        <ShopStorageItem
          isClearInput={mode === "add"}
          textFirstButton={mode === "add" ? "Создать" : "Обновить"}
          textSecondButton={mode === "edit" ? "Удалить" : undefined}
          handleDelete={handleDelete}
          product={
            mode === "add" ? defaultItem : selectedProduct || defaultItem
          }
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
}
