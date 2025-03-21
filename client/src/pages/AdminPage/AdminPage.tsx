import { useEffect, useState } from "react";
import { ShopStorages } from "../ShopStorages/ShopStorages";
import styles from "./AdminPage.module.css";
import Orders from "@/pages/OrdersPage/OrdersPage";
import { useAppSelector } from "@/shared/hooks/reduxHook";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import RecipeCrud from "@/widgets/RecipesCRUD/RecipeCrud";
import DrinkCreateForm from "@/widgets/DrinksCrud/DrinkCreateForm";


export function AdminPage() {
  const [activeModule, setActiveModule] = useState<
    "orders" | "shopStorages" | "recipes" | "drinks"
  >("orders");
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!user || user?.isAdmin === false) {
        navigate(CLIENT_ROUTES.MAIN);
        console.log("user", user?.isAdmin);
      }
    }, 500); // Задержка 200 мс

    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, [navigate, user]);

  if (!user) {
    return <></>; // Возвращаем пустой фрагмент, если пользователь не загружен
  }

  return (
    <div className={styles.container}>
      {/* Панель с вкладками */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${
            activeModule === "orders" ? styles.active : ""
          }`}
          onClick={() => setActiveModule("orders")}
        >
          Заказы
        </button>
        <button
          className={`${styles.tabButton} ${
            activeModule === "shopStorages" ? styles.active : ""
          }`}
          onClick={() => setActiveModule("shopStorages")}
        >
          Склад
        </button>
        <button
          className={`${styles.tabButton} ${
            activeModule === "recipes" ? styles.active : ""
          }`}
          onClick={() => setActiveModule("recipes")}
        >
          Рецепты
        </button>
        <button
          className={`${styles.tabButton} ${
            activeModule === "drinks" ? styles.active : ""
          }`}
          onClick={() => setActiveModule("drinks")}
        >
          Напитки
        </button>
      </div>

      {/* Рендерим активный модуль */}
      <div className={styles.moduleContainer}>
        {activeModule === "orders" && <Orders />}
        {activeModule === "shopStorages" && <ShopStorages />}
        {activeModule === "recipes" && <RecipeCrud />}
        {activeModule === "drinks" && <DrinkCreateForm />}
      </div>
    </div>
  );
}
