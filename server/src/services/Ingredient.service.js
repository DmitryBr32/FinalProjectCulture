const { Ingredient, User } = require("../db/models");
const { UserStock } = require("../db/models");

class IngredientService {
  static async getUserIngredients(userId) {
    return await UserStock.findOrCreate({
})}

module.exports = IngredientService;
