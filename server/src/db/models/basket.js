"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate({ User, Product, Order }) {
      Basket.belongsTo(User, { foreignKey: "userId" });
      Basket.belongsTo(Product, { foreignKey: "productId" });
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
