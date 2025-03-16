import { useEffect, useRef, useState } from "react";
import styles from "./Bar.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { getStockThunk } from "@/entities/stock";

export default function Bar() {
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);
  const [hoveredType, setHoveredType] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (user) {
      console.log("Fetching stock for user:", user);
      void dispatch(getStockThunk(user));
    }
  }, [dispatch, user]);

  const handleMouseOver = (type: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredType(type);
  };

  const handleMouseOut = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredType(null);
    }, 1000);
  };

  const typesOrder = Array.from(
    new Set(stock.map((item) => item.ingredient.type))
  );

  const stockByType = typesOrder.reduce<Record<string, typeof stock>>(
    (acc, type) => {
      const filteredItems = stock.filter(
        (item) => item.ingredient.type === type
      );
      if (filteredItems.length > 0) {
        acc[type] = filteredItems;
      }
      return acc;
    },
    {}
  );

  return (
    <div className={styles.bar}>
      <img
        src="https://torgpit.ru/upload/images/stories/kartinki/bisnes-plan/otkritie-bara.jpg"
        alt="Бар"
      />

      <div className={styles.barCollection}>
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          typesOrder.slice(0, 18).map((type) => (
            <div
              key={type}
              className={styles.barItem}
              onMouseOver={() => handleMouseOver(type)}
              onMouseOut={handleMouseOut}
            >
              {hoveredType === type && (
                <div className={styles.barBlock}>
                  <p>
                    <strong>{type}</strong>
                  </p>
                  {stockByType[type].map((ingredient) => (
                    <p key={ingredient.id}>
                      Марка: {ingredient.ingredient.title} —{" "}
                      {ingredient.ingredientBalance} мл
                    </p>
                  ))}
                </div>
              )}
              <img
                src="https://cdn-img.perekrestok.ru/i/800x800-fit/xdelivery/files/a7/24/15aa8a53a002522a88eee56f35f4.jpg"
                alt="Бутылка"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
