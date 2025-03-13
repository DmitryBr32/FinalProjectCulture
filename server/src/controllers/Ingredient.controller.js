const IngredientService = require("../services/Ingredient.service");

class IngredientController {
  static async getIngredients(req, res) {
    try {
      const ingredients = await IngredientService.getIngredients();
      res.status(200).json(ingredients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async getIngredient(req, res) {
    const { id } = req.params;
    try {
      const ingredient = await IngredientService.getIngredient(id);
      if (!ingredient) {
        return res.status(404).json({ error: "Ингредиент не найден" });
      }
      res.status(200).json(ingredient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async addIngredient(req, res) {
    const ingredientData = req.body;
    try {
      const ingredient = await IngredientService.create(ingredientData);
      res.status(201).json(ingredient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async updateIngredient(req, res) {
    try {
      const ingredientData = req.body;
      const { id } = req.params;
      const updatedIngredient = await IngredientService.update(
        id,
        ingredientData
      );
      res.status(200).json(updatedIngredient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
  static async removeIngredient(req, res) {
    try {
      const { id } = req.params;
      await IngredientService.delete(id);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
}

module.exports = IngredientController;
