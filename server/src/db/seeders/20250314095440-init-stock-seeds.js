"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "UserStocks",
      [
        {
          ingredientId: 1,
          ingredientBalance: "200",
          userId: 1,
        },
        {
          ingredientId: 2,
          ingredientBalance: "50",
          userId: 1,
        },
        {
          ingredientId: 3,
          ingredientBalance: "400",
          userId: 1,
        },
        {
          ingredientId: 5,
          ingredientBalance: "100",
          userId: 1,
        },
        {
          ingredientId: 4,
          ingredientBalance: "10",
          userId: 1,
        },
        {
          ingredientId: 8,
          ingredientBalance: "30",
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
