const { UserStock } = require("../db/models");

class StockService {
  static async getStock(userId) {
    return await UserStock.findAll({
      where: { userId },
      include: "Ingredients",
    });
  }

  static async findOrCreateUserStock(userId, ingredientId, ingredientBalance) {
    const stock = await UserStock.findOne({
      where: { userId, ingredientId },
    });

    if (stock) {
      stock.ingredientBalance = ingredientBalance;
      await stock.save();
      return stock;
    } else {
      return await UserStock.create({
        userId,
        ingredientId,
        ingredientBalance,
      });
    }
  }

  static async delete(userId, ingredientId) {
    return await UserStock.destroy({ where: { userId, ingredientId } });
  }
}

module.exports = StockService;
