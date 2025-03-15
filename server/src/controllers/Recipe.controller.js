const RecipeService = require("../services/Recipe.service");
const arrayCrossElements = require("../utils/ArrayCrossElements");

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

  static async getRecipeByTitle(req, res) {
    const { title } = req.body;
    try {
      const recipe = await RecipeService.getRecipeByTitle(title);
      if (!recipe) {
        return res.status(404).json({ error: "Ингредиент не найден" });
      }
      res.status(200).json(recipe);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async getRecipesByIngr(req, res) {
    const { type } = req.body;
    try {
      const recipes = await RecipeService.getRecipesByIngr(type);
      if (!recipes) {
        return res.status(404).json({ error: "Ингредиенты не найдены" });
      }
      res.status(200).json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async getRecipesBySeveralIngrs(req, res) {
    const typesArr = req.body;
    try {
      const allRecipes = [];
      for (let obj of typesArr) {
        const recipes = await RecipeService.getRecipesByIngr(obj);
        if (!recipes || !Array.isArray(recipes) || recipes.length === 0) {
          return res.status(201).json([]);
        }
        allRecipes.push(recipes);
      }
      const uniqueAllRecipes = arrayCrossElements(allRecipes);
      res.status(200).json(uniqueAllRecipes);
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
