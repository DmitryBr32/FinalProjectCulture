"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.Basket, { foreignKey: 'basketId' });
    }
  }

  Order.init({
    basketId: DataTypes.INTEGER,
    comment: DataTypes.TEXT,
    address: DataTypes.STRING,
    date: DataTypes.DATE,
    telephone: DataTypes.STRING,
    recipient: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};