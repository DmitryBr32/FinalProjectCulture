import { userIngrs } from "../Bar/Bar";
import styles from "./BarStorage.module.css";

export default function BarStorage() {
  return (
    <div className={styles.container}>
      <h1>Хранилище ваших напитков</h1>
      {userIngrs.map((userIngr) => (
        <div key={userIngr.id} className={styles.ingrCard}>
          <div className={styles.ingrImg}>
            <img src={userIngr.img} alt="Ингредиент" />
          </div>
          <p>Остаток: {userIngr.ingr_balance} мл</p>
        </div>
      ))}
    </div>
  );
}
