const BarService = require("../services/Bar.service");

class IngredientController {
  static async getIngredient(req, res) {
    try {
      const ingredient = await BarService.getUserStock(
        req.params.ingredientId
      );
      res.status(200).json(ingredient);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = IngredientController;
