const RecipeService = require("../services/Recipe.service");
const arrayCrossElements = require("../utils/ArrayCrossElements");

class RecipeController {
  static async getRecipes(req, res) {
    try {
      const recipes = await RecipeService.getAllRecipes();
      if (!recipes) {
        return res.status(404).json({ error: "Рецепты не найдены" });
      }
      res.status(200).json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async getRecipe(req, res) {
    const { id } = req.params;
    try {
      const recipe = await RecipeService.getRecipeById(id);
      if (!recipe) {
        return res.status(404).json({ error: "Рецепт не найден" });
      }
      res.status(200).json(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async getRecipeByTitle(req, res) {
    const { title } = req.body;
    try {
      const recipe = await RecipeService.getRecipeByTitle(title);
      if (!recipe) {
        return res.status(404).json({ error: "Рецепт не найден" });
      }
      res.status(200).json(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async getRecipesByIngrType(req, res) {
    const { type } = req.body;
    try {
      const recipes = await RecipeService.getRecipesByIngr(type);
      if (!recipes) {
        return res.status(404).json({ error: "Рецепты не найдены" });
      }
      res.status(200).json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async getRecipesByIngrs(req, res) {
    const typesArr = req.body;
    try {
      const allRecipes = [];
      for (let { type } of typesArr) {
        const recipes = await RecipeService.getRecipesByIngr(type);
        if (!recipes || !Array.isArray(recipes) || recipes.length === 0) {
          return res
            .status(200)
            .json({ message: "Такое сочетание не найдено" });
        }
        allRecipes.push(recipes);
      }
      const uniqueAllRecipes = arrayCrossElements(allRecipes);
      if (uniqueAllRecipes.length === 0) {
        return res
          .status(200)
          .json({ message: "Рецепт с таким сочетанием не найден" });
      }
      const uniqueAllRecipesWithIngrs = await Promise.all(
        uniqueAllRecipes.map(async (recipe) => {
          const recipeWithIngredients = await RecipeService.getRecipeById(
            recipe.id
          );
          return recipeWithIngredients;
        })
      );

      res.status(200).json(uniqueAllRecipesWithIngrs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async addRecipe(req, res) {
    const { recipeData, ingredientsData } = req.body;

    if (!recipeData || !ingredientsData || ingredientsData.length === 0) {
      return res.status(400).json({
        error: "Необходимы данные и хотя бы один компонент",
      });
    }
    try {
      const allRecipeTitles = await RecipeService.getAllRecipeTitles();

      if (allRecipeTitles.includes(recipeData.title.toLowerCase())) {
        return res
          .status(400)
          .json({ error: "Рецепт с таким заголовком уже существует" });
      }

      const recipe = await RecipeService.createRecipe(
        recipeData,
        ingredientsData
      );
      const recipeWithIngredients = await RecipeService.getRecipeById(
        recipe.id
      );
      if (!recipeWithIngredients) {
        res.status(201).json(recipeWithIngredients);
      } else {
        res.status(201).json({ message: "Связи не установлены" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async updateRecipe(req, res) {
    try {
      const recipeData = req.body;
      const { id } = req.params;
      const updatedRecipe = await RecipeService.updateRecipe(id, recipeData);
      res.status(200).json(updatedRecipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async removeRecipe(req, res) {
    try {
      const { id } = req.params;
      await RecipeService.deleteRecipe(id);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
}

module.exports = RecipeController;
