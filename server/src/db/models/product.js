"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ ShopStorage }) {
      Product.hasOne(ShopStorage, { foreignKey: "productId" });
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      article: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dimensions: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weight: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );

  return Product;
};