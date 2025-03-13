"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate({ UserStock }) {
      this.hasMany(UserStock, { foreignKey: "ingredientId", as: "userStocks" });
    }
  }
  Ingredient.init(
    {
      type: DataTypes.STRING,
      title: DataTypes.STRING,
      strength: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
