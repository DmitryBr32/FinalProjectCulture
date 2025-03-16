import { useState } from "react";
import { ShopStorages } from "../ShopStorages/ShopStorages";
import styles from "./AdminPage.module.css";
import Orders from "@/pages/OrdersPage/OrdersPage";

export function AdminPage() {
  const [activeModule, setActiveModule] = useState<"orders" | "shopStorages">("orders");

  return (
    <div className={styles.container}>
      {/* Панель с вкладками */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeModule === "orders" ? styles.active : ""}`}
          onClick={() => setActiveModule("orders")}
        >
          Заказы
        </button>
        <button
          className={`${styles.tabButton} ${activeModule === "shopStorages" ? styles.active : ""}`}
          onClick={() => setActiveModule("shopStorages")}
        >
          Склад
        </button>
      </div>

      {/* Рендерим активный модуль */}
      <div className={styles.moduleContainer}>
        {activeModule === "orders" && <Orders />}
        {activeModule === "shopStorages" && <ShopStorages />}
      </div>
    </div>
  );
}