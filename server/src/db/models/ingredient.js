"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate({ UserStock, RecComponent }) {
      this.hasMany(UserStock, {
        foreignKey: "ingredientId",
        as: "userStocks",
      });
      this.hasMany(RecComponent, {
        foreignKey: "ingredientId",
        as: "recComponents",
      });
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
