const RecFavouriteService = require("../services/RecFavourite.service");
const RecipeService = require("../services/Recipe.service");

class RecFavouriteController {
  static async addUserFavRecipe(req, res) {
    const { userId, recipeId } = req.body;
    try {
      const newFav = await RecFavouriteService.findOrCreate(userId, recipeId);
      if (!newFav) {
        return res.status(404).json({ message: "Рецепт уже в избранном" });
      }

      const recipe = await RecipeService.getRecipeById(recipeId);
      if (!recipe) {
        return res.status(404).json({ message: "Рецепт не найден" });
      }

      await recipe.increment("likes");
      res.status(200).json({ message: "Рецепт понравился!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ошибка при лайке рецепта" });
    }
  }

  static async deleteUserFavRecipe(req, res) {
    const { userId, recipeId } = req.body;
    try {
      const delFav = await RecFavouriteService.findOne(userId, recipeId);
      if (!delFav) {
        return res
          .status(404)
          .json({ message: "Рецепта не было в избранном у пользователя" });
      }

      await RecFavouriteService.deleteFavourite(userId, recipeId);

      const recipe = await RecipeService.getRecipeById(recipeId);
      if (!recipe) {
        return res.status(404).json({ message: "Рецепт не найден" });
      }
      await recipe.decrement("likes");
      res.status(200).json({ message: "Рецепт удалён из избранного!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ошибка при лайке рецепта" });
    }
  }
}

module.exports = RecFavouriteController;
