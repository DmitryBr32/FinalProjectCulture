"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RecFavourite extends Model {
    static associate({ User, Recipe }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
      this.belongsTo(Recipe, {
        foreignKey: "recipeId",
        as: "recipe",
      });
    }
  }
  RecFavourite.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "RecFavourite",
    }
  );
  return RecFavourite;
};
