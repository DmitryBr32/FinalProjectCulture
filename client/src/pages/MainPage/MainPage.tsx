import Slider from "@/widgets/Slider/Slider";
import styles from "./styles.module.css";

export function MainPage() {
  return (
    <div className={styles.main}>
      <div className={styles.banner}>
        <h1 className={styles.title}>Станьте барменом</h1>
        <p className={styles.text}>
          Это приложение поможет вам создавать потрясающие коктейли. Откройте
          для себя мир ярких вкусов и бесконечных возможностей, все это у вас
          под рукой.
        </p>
      </div>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  );
}
