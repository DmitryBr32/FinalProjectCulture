const { Ingredient } = require("../db/models");

class IngredientService {
  static async getIngredients() {
    return await Ingredient.findAll();
  }

  static async getIngredient(id) {
    return await Ingredient.findByPk(id);
  }

  static async create(ingredientData) {
    return await Ingredient.create(ingredientData);
  }

  static async update(id, ingredientData) {
    return await Ingredient.update(ingredientData, { where: { id } });
  }

  static async delete(id) {
    return await Ingredient.destroy({ where: { id } });
  }
}

module.exports = IngredientService;
