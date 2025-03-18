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
      hooks: {
        afterCreate: async (recFavourite, options) => {
          try {
            const recipe = await sequelize.models.Recipe.findByPk(
              recFavourite.recipeId
            );
            if (recipe) {
              await recipe.increment("likes", {
                transaction: options.transaction,
              });
            }
          } catch (error) {
            console.error("Ошибка при увеличении лайков:", error);
          }
        },
        afterDestroy: async (recFavourite, options) => {
          try {
            const recipe = await sequelize.models.Recipe.findByPk(
              recFavourite.recipeId
            );
            if (recipe) {
              if (recipe.likes > 0) {
                await recipe.decrement("likes", {
                  transaction: options.transaction,
                });
              }
            }
          } catch (error) {
            console.error("Ошибка при уменьшении лайков:", error);
          }
        },
      },
    }
  );
  return RecFavourite;
};
