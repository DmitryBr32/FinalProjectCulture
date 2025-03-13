const RecipeService = require("../services/Recipe.service");

class RecipeController {
  static async getRecipes(req, res) {
    try {
      const recipes = await RecipeService.getAllRecipes();
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
        return res.status(404).json({ error: "Ингредиент не найден" });
      }
      res.status(200).json(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async addRecipe(req, res) {
    const recipeData = req.body;
    try {
      const recipe = await RecipeService.createRecipe(recipeData);
      res.status(201).json(recipe);
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
