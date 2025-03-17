"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Product, ShopStorage }) {
      Basket.belongsTo(User, { foreignKey: "userId" });
      Basket.belongsTo(Product, { foreignKey: "productId" });
      Basket.belongsTo(ShopStorage, { foreignKey: "productId" });
    }
  }

  Basket.init(
    {
      userId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );

  return Basket;
};