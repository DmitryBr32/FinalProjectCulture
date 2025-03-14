import { useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const items = [
    {
      main: "Бар",
      icon: "svg",
      backgroundImage: "/bottles.jpg",
      navigator: "/bar",
    },
    {
      main: "Журнал",
      icon: "svg",
      backgroundImage: "/coctail_bar.jpg",
      navigator: "/journal",
    },
    {
      main: "Магазин",
      icon: "svg",
      backgroundImage: "/shop.jpg",
      navigator: "/shop",
    },
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.options}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() =>
              activeIndex === index
                ? navigate(`${item.navigator}`)
                : handleItemClick(index)
            }
            style={{
              width: index === activeIndex ? "600px" : "80px",
              backgroundImage: `url(${item.backgroundImage})`,
            }}
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
