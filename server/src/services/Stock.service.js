const { UserStock } = require("../db/models");
const { Ingredient } = require("../db/models");

class StockService {
  static async getStock(userId) {
    return await UserStock.findAll({
      where: { userId },
      include: [{ model: Ingredient, as: "ingredient" }],
    });
  }

  static async findOrCreateUserStock(userId, ingredientId, ingredientBalance) {
    const [stock, created] = await UserStock.findOrCreate({
      where: { userId, ingredientId },
      defaults: { ingredientBalance, userId, ingredientId },
      include: [{ model: Ingredient, as: "ingredient" }],
    });
    if (!created) {
      stock.ingredientBalance = ingredientBalance;
      await stock.save();
      await stock.reload({
        include: [{ model: Ingredient, as: "ingredient" }],
      });
    }
    return stock;
  }

  static async delete(userId, ingredientId) {
    return await UserStock.destroy({ where: { userId, ingredientId } });
  }
}

module.exports = StockService;
