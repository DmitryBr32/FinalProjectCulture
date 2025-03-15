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
        foreignKey: "ingredientTypeId",
        as: "recComponents",
      });
    }
  }
  Ingredient.init(
    {
      type: DataTypes.STRING,
      isAlko: DataTypes.BOOLEAN,
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
