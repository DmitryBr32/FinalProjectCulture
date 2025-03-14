import { useEffect } from "react";
import styles from "./Bar.module.css";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import { getStockThunk } from "@/entities/stock";

export default function Bar() {
  const stock = useAppSelector((state) => state.stock.stock);
  const user = useAppSelector((state) => state.user.user?.id);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.stock.isLoading);

  useEffect(() => {
    if (user) {
      console.log("Fetching stock for user:", user);
      void dispatch(getStockThunk(user));
    }
  }, [dispatch, user]);

  return (
    <div className={styles.bar}>
      <img
        src="https://torgpit.ru/upload/images/stories/kartinki/bisnes-plan/otkritie-bara.jpg"
        alt="Бар"
      />
      <div className={styles.barCollection}>
        {loading ? (
          <p>Загрузка</p>
        ) : (
          stock.slice(0, 18).map((ingredient) => (
            <div key={ingredient.id} className={styles.barItem}>
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
