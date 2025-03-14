import Bar from "@/widgets/Bar/Bar";
import BarStorage from "@/widgets/BarStorage/BarStorage";
import styles from "./MyBarPage.module.css";
import AvailableCocktails from "@/widgets/AvailableCocktails/AvailableCocktails";

export default function MyBarPage() {
  return (
    <div>
      <h1>Мой бар</h1>
      <div className={styles.container}>
        <BarStorage />
        <Bar />
        <AvailableCocktails />
      </div>
    </div>
  );
}
