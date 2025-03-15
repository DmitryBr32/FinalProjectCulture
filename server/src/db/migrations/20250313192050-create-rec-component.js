"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RecComponents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ingredientTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Ingredients",
          key: "id",
        },
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Recipes",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("RecComponents");
  },
};
