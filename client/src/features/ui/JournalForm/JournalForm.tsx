import { JSX, useEffect, useState } from "react";
import styles from "./JournalForm.module.css";
import { getRecipesThunk } from "@/entities/recipe";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHook";
import ModalRecipe from "@/widgets/ModalRecipe/ModalRecipe";
import CoctailBox from "@/widgets/CoctailBox/CoctailBox";
import ResponseByIngrsForm from "../ResponseByIngrsForm/ResponseByIngrsForm";

export default function JournalForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector((state) => state.recipes.recipes);

  useEffect(() => {
    dispatch(getRecipesThunk());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedRecipeId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipeId(null);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Рецепты</h1>

      <div className={styles.selector}>
        <ResponseByIngrsForm />
        <div className={styles.banner}>
          <h1 className={styles.title}>Найдите идеальное сочетание</h1>
          <p className={styles.text}>
            Изучайте новые рецепты, фильтруйте по ингредиентам и категориям.
          </p>
        </div>
      </div>
      <div className={styles.selector}>
        <div className={styles.banner}>
          <h1 className={styles.title}>Сохраните любимые</h1>
          <p className={styles.text}>
            В приложении можно сохранять любимые коктейли в разделе «Избранное».
            Это позволит быстро находить и повторять приготовление ваших любимых
            напитков.
          </p>
        </div>

        <CoctailBox recipes={recipes} onOpen={openModal} />
      </div>

      {isModalOpen && selectedRecipeId && (
        <ModalRecipe
          recId={selectedRecipeId}
          onClose={closeModal}
          recipesLength={recipes.length}
        />
      )}
    </div>
  );
}
