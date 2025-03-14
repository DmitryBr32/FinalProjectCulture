"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecComponents",
      [
        { recipeId: 1, ingredientId: 5 },
        { recipeId: 2, ingredientId: 6 },
        { recipeId: 2, ingredientId: 9 },
        { recipeId: 3, ingredientId: 5 },
        { recipeId: 4, ingredientId: 1 },
        { recipeId: 4, ingredientId: 10 },
      ],
      {}
    );
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("RecComponents", null, {});
  },
};
