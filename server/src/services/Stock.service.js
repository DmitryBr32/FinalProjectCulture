const { UserStock, Ingredient } = require("../db/models");

class StockService {
  static async getUserStock(userId) {
    const stock = await UserStock.findAll({
      where: { userId },
      include: [{ model: Ingredient, as: "ingredientType" }],
    });
    return stock;
  }

  static async createUserStock(
    userId,
    ingredientTypeId,
    ingredientBalance,
    title,
    strength
  ) {
    const newStock = await UserStock.create({
      userId,
      ingredientTypeId,
      ingredientBalance,
      title,
      strength,
    });
    await newStock.reload({
      include: [
        {
          model: Ingredient,
          as: "ingredientType",
          attributes: ["id", "type", "isAlko", "imgUrl"],
        },
      ],
    });

    return newStock;
  }

  static async findOrCreateUserStock(
    userId,
    ingredientTypeId,
    ingredientBalance,
    title,
    strength
  ) {
    const existingStock = await UserStock.findOne({
      where: {
        userId,
        ingredientTypeId,
      },
    });
    if (existingStock) {
      existingStock.title = title;
      existingStock.ingredientBalance = ingredientBalance;
      existingStock.strength = strength;
      await existingStock.save();
      await existingStock.reload({
        include: [
          {
            model: Ingredient,
            as: "ingredientType",
            attributes: ["id", "type", "isAlko", "imgUrl"],
          },
        ],
      });
      return existingStock;
    }
    const newStock = await UserStock.create({
      userId,
      ingredientTypeId,
      ingredientBalance,
      title,
      strength,
    });
    await newStock.reload({
      include: [
        {
          model: Ingredient,
          as: "ingredientType",
          attributes: ["id", "type", "isAlko", "imgUrl"],
        },
      ],
    });
    return newStock;
  }

  static async delete(userId, id) {
    return await UserStock.destroy({ where: { userId, id } });
  }
}

module.exports = StockService;
