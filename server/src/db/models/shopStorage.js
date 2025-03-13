"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShopStorage extends Model {
    static associate({ Product }) {
      ShopStorage.belongsTo(Product, { foreignKey: "productId" });
    }
  }

  ShopStorage.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "ShopStorage",
    }
  );

  return ShopStorage;
};
