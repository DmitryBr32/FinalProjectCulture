"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecComponent extends Model {
    static associate({ Ingredient, Recipe }) {
      this.belongsTo(Ingredient, {
        foreignKey: "ingredientTypeId",
        as: "ingredient",
      });
      this.belongsTo(Recipe, {
        foreignKey: "recipeId",
        as: "recipe",
      });
    }
  }
  RecComponent.init(
    {
      ingredientTypeId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
      quantity: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "RecComponent",
    }
  );
  return RecComponent;
};
