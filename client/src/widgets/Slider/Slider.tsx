import { useState } from "react";
import styles from "./styles.module.css";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const items = [
    {
      main: "Бар",
      icon: "svg",
    },
    {
      main: "Журнал",
      icon: "svg",
    },
    {
      main: "Магазин",
      icon: "svg",
    },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.options}>
        {items.map((item, index) => (
          <div
            key={index} // Важно для React
            className={`${styles.option} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleItemClick(index)}
            style={{ width: index === activeIndex ? "600px" : "80px" }}
          >
            <div className={styles.shadow}></div>
            <div className={styles.label}>
              <div className={styles.icon}>
                <i className={item.icon}></i>
              </div>
              <div className={styles.info}>
                <div className={styles.main}>{item.main}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
