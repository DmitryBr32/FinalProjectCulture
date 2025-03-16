import {
  deleteShopStorage,
  getShopStorage,
  updateShopStorage,
} from "@/shared/api/api";
import styles from "./ShopStorages.module.css";
import { useEffect, useState } from "react";
import { ShopStorageItem, StorageItem } from "./ShopStorageItem";

export const defaultItem = {
  id: 0,
  name: "",
  image: "",
  price: 0,
  description: "",
  quantity: 0,
};

export function ShopStorages() {
  const [products, setProducts] = useState<StorageItem[] | null>(null);

  async function getShopStorageData() {
    const response = await getShopStorage();
    setProducts(response);
  }

  useEffect(() => {
    getShopStorageData();
  }, []);

  const handleUpdate = async (data: StorageItem) => {
    await updateShopStorage(data);
    getShopStorageData();
  };

  const handleDelete = async (id: number) => {
    const response = await deleteShopStorage(id);
    const filteredProducts = products?.filter((product) => product.id !== id);
    setProducts(filteredProducts ?? null);
    console.log("response", response);
  };

  return (
    <div className={styles.container}>
      <h2>Склад</h2>
      <ShopStorageItem
        isClearInput={true}
        textFirstButton={"Создать"}
        handleDelete={handleDelete}
        product={defaultItem}
        onUpdate={handleUpdate}
      />
      {products?.map((product) => (
        <ShopStorageItem
          textSecondButton={"Удалить"}
          textFirstButton={"Обновить"}
          handleDelete={handleDelete}
          key={product.id}
          product={product}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
