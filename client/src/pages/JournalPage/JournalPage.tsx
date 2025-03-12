import React, { useEffect, useState } from 'react';
import { RecipeApi } from '@/entities/pecipe/api/index';
import { RecipeCard } from '@/entities/pecipe/ui/PecipeCard/RecipeCard';

export function RecipesPage(): JSX.Element {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    RecipeApi.getRecipes().then((response) => {
      if (response.data) {
        setRecipes(response.data);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <div>Нет рецептов</div>
      )}
    </div>
  );
}


