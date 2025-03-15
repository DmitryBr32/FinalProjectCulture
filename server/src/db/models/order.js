"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId" });
    }
  }

  Order.init({
    comment: DataTypes.TEXT,
    address: DataTypes.STRING,
    date: DataTypes.DATE,
    telephone: DataTypes.STRING,
    recipient: DataTypes.STRING,
    basket: DataTypes.JSONB,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};