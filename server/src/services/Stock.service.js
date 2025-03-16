const { UserStock, Ingredient } = require("../db/models");

class StockService {
  static async getUserStock(userId) {
    const stock = await UserStock.findAll({
      where: { userId },
      include: [{ model: Ingredient, as: "ingredientType" }],
    });
    console.log(stock);
    return stock;
  }

  static async findOrCreateUserStock(
    userId,
    ingredientTypeId,
    ingredientBalance,
    title,
    strength
  ) {
    // Find all existing stocks for this user and ingredient type
    const existingStocks = await UserStock.findAll({
      where: { userId, ingredientTypeId },
      include: [{ model: Ingredient, as: "ingredientType" }],
    });
    // Check if there's an exact title match
    const exactMatch = existingStocks.find((stock) => stock.title === title);

    if (exactMatch) {
      // Update existing stock with same title
      exactMatch.ingredientBalance = ingredientBalance;
      await exactMatch.save();
      await exactMatch.reload({
        include: [{ model: Ingredient, as: "ingredientType" }],
      });
      return exactMatch;
    } else {
      // Create new stock entry
      const stock = await UserStock.create({
        userId,
        ingredientTypeId,
        ingredientBalance,
        title,
        strength,
      });
      await stock.reload({
        include: [{ model: Ingredient, as: "ingredientType" }],
      });
      return stock;
    }
  }

  static async delete(userId, ingredientTypeId) {
    return await UserStock.destroy({ where: { userId, ingredientTypeId } });
  }
}

module.exports = StockService;
