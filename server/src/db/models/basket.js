"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsTo(models.User, { foreignKey: 'userId' });
      Basket.belongsTo(models.Product, { foreignKey: 'productId' });
      Basket.hasOne(models.Order, { foreignKey: 'basketId' });
    }
  }

  Basket.init({
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    isOrdered: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Basket',
  });

  return Basket;
};