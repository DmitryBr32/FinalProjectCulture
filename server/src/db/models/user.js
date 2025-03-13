"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Basket, UserStock, RecFavourite }) {
      this.hasMany(Basket, { foreignKey: "userId" });
      this.hasMany(UserStock, { foreignKey: "userId" });
      this.hasMany(RecFavourite, { foreignKey: "userId" });
    }
  }

  // ассоциации

  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
