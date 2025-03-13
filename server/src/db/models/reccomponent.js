"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecComponent extends Model {
    static associate({ Ingredient, Recipe }) {
      this.belongsTo(Ingredient, {
        foreignKey: "ingredientId",
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
      ingredientId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RecComponent",
    }
  );
  return RecComponent;
};
