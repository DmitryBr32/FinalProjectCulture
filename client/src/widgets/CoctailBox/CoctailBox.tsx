import { IRecipeArrayType } from "@/entities/recipe/model";
import { useRef } from "react";
import styles from "./CoctailBox.module.css";
import IngredientsList from "./IngredientsList";

type Prop = {
  recipes: IRecipeArrayType;
  onOpen: (id: number) => void;
};
export default function CoctailBox({ recipes, onOpen }: Prop) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Прокрутка влево на 200 пикселей
        behavior: "smooth", // Добавляем плавную анимацию
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Прокрутка вправо на 200 пикселей
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button className={styles.scrollButton} onClick={scrollLeft}></button>{" "}
      <div className={styles.carousel} ref={carouselRef}>
        <div className={styles.recipeList}>
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className={styles.recipeContainer}
              onClick={() => onOpen(recipe.id)}
            >
              <div className={styles.ingrList}>
                <IngredientsList recipe={recipe} />
              </div>
              <div
                className={styles.recipeCard}
                style={{
                  backgroundImage: recipe.img ? `url(${recipe.img})` : "none",
                  backgroundSize: "cover",
                }}
              ></div>{" "}
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.scrollButton} onClick={scrollRight}></button>{" "}
    </div>
  );
}
