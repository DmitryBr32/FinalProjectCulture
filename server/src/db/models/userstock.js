"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ingredient, User }) {
      this.belongsTo(Ingredient, {
        foreignKey: "ingredientId",
        as: "ingredients",
      });
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  UserStock.init(
    {
      ingredientId: DataTypes.INTEGER,
      ingredientBalance: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserStock",
    }
  );
  return UserStock;
};
