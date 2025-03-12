import { userIngrs } from "../Bar/Bar";
import styles from "./BarStorage.module.css";

export default function BarStorage() {
  return (
    <div>
      <h1>Хранилище ваших напитков</h1>
      {userIngrs.map((userIngr) => (
        <div key={userIngr.id} className={styles.ingr_card}>
          <div className={styles.ingr_img}>
            <img src={userIngr.img} alt="Ингредиент" />
          </div>
          <p>Остаток: {userIngr.ingr_balance} мл</p>
        </div>
      ))}
    </div>
  );
}
