const { Recipe } = require("../db/models");

class RecipeService {
  static async getAllRecipes() {
    return await Recipe.findAll();
  }

  static async getRecipeById(id) {
    return await Recipe.findByPk(id);
  }

  static async createRecipe(recipeData) {
    return await Recipe.create(recipeData);
  }

  static async updateRecipe(id, recipeData) {
    return await Recipe.update(recipeData, { where: { id } });
  }

  static async deleteRecipe(id) {
    return await Recipe.destroy({ where: { id } });
  }
}

module.exports = RecipeService;
