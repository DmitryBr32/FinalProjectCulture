function arrayCrossElements(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return [];
  }

  const recipeIdSets = arrayOfArrays.map(
    (arr) => new Set(arr.map((recipe) => recipe.id))
  );

  let commonRecipeIdsSet = recipeIdSets[0];
  for (let i = 1; i < recipeIdSets.length; i++) {
    const currentSet = recipeIdSets[i];
    const tempSet = new Set();
    for (const recipeId of commonRecipeIdsSet) {
      if (currentSet.has(recipeId)) {
        tempSet.add(recipeId);
      }
    }
    commonRecipeIdsSet = tempSet;
  }

  if (arrayOfArrays[0].length === 0) {
    return [];
  }

  const commonRecipes = arrayOfArrays[0].filter((recipe) =>
    commonRecipeIdsSet.has(recipe.id)
  );
  return commonRecipes;
}

module.exports = arrayCrossElements;
