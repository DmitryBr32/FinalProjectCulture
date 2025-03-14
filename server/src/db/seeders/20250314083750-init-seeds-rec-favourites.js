"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecFavourites",
      [
        { userId: 1, recipeId: 1 },
        { userId: 1, recipeId: 2 },
        { userId: 1, recipeId: 4 },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RecFavourites", null, {});
  },
};
