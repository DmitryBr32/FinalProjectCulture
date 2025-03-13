const { UserStock } = require("../db/models");

class StockService {
  static async getStock(userId) {
    return await UserStock.findAll({
      where: { userId },
      include: "Ingredients",
    });
  }

  static async findOrCreateUserStock(userId, ingredientId, ingredientBalance) {
    return await UserStock.findOrCreate({
      where: { userId, ingredientId },
      defaults: { ingredientBalance },
    });
  }

  static async delete(userId, ingredientId) {
    return await UserStock.destroy({ where: { userId, ingredientId } });
  }
}

module.exports = StockService;
