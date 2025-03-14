import Slider from "@/widgets/Slider/Slider";
import styles from "./styles.module.css";

export function MainPage() {
  return (
    <div className={styles.main}>
      <div className={styles.slider}>
        <Slider />
      </div>
    </div>
  );
}
