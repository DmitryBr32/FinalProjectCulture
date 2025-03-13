"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ RecFavourite }) {
      this.hasMany(RecFavourite, { foreignKey: "recipeId", as: "Favourites" });
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      img: DataTypes.STRING,
      strengthLevel: DataTypes.STRING,
      isShot: DataTypes.BOOLEAN,
      likes: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Recipe",
    }
  );
  return Recipe;
};
