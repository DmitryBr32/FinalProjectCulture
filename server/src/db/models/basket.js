"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    static associate(models) {
      Basket.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  Basket.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true, 
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      productId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      availability: DataTypes.BOOLEAN,
      totalPrice: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Basket",
    }
  );

  return Basket;
};