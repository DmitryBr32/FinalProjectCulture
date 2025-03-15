"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ RecFavourite, RecComponent }) {
      this.hasMany(RecFavourite, { foreignKey: "recipeId", as: "Favourites" });
      this.hasMany(RecComponent, { foreignKey: "recipeId", as: "Components" });
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      text: DataTypes.STRING,
      discription: DataTypes.STRING,
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
