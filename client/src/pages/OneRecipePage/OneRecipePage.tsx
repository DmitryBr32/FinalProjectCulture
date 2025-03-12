import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { RecipeApi } from '@/entities/pecipe/api'; // Ваш API для рецептов
import { RecipeCard } from '@/components/RecipeCard'; // Компонент карточки рецепта
import { useAppSelector } from '@/shared/hooks/reduxHook';
import { CLIENT_ROUTES } from '@/shared/enums/clientRoutes';

export function OneRecipePage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user); 
  const [recipe, setRecipe] = useState<IPecipe | null>(null); 

  useEffect(() => {
    if (id) {
      RecipeApi.getRecipeById(Number(id)).then((response) => {
        if (response.data) {
          setRecipe(response.data); // Устанавливаем полученные данные о рецепте
        }
      });
    }
  }, [id]);

  const handleDelete = (id: number) => {
    RecipeApi.deleteRecipe(id)
      .then((response) => {
        if (response.status === 200) {
          showAlert('Рецепт удален');
          navigate(CLIENT_ROUTES.RECIPES); // Переход на страницу со списком рецептов
        }
      })
      .catch(() => {
        showAlert('Ошибка при удалении рецепта');
      });
  };

  const handleUpdate = (inputs: RecipeUpdateData) => {
    RecipeApi.updateRecipeById(Number(id), inputs).then((response) => {
      if (response.status === 400) {
        showAlert(response.message);
      }
      if (response.status === 200) {
        setRecipe(response.data); // Обновляем рецепт в стейте
        showAlert('Рецепт обновлен');
      }
    });
  };

  return (
    <div className={styles.container}>
      {recipe ? (
        <div className={styles.recipeContainer}>
          {user?.id === recipe.author_id && (
            <>
              <RecipeUpdateForm recipe={recipe} onUpdate={handleUpdate} />
              <RecipeCard recipe={recipe} onDelete={handleDelete} />
            </>
          )}
          {user?.id !== recipe.author_id && <RecipeCard recipe={recipe} />}
        </div>
      ) : (
        <div>Рецепт не найден</div>
      )}
    </div>
  );
}
