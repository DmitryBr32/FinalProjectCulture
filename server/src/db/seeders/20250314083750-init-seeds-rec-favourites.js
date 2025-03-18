"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecFavourites",
      [
        { userId: 2, recipeId: 35 },
        { userId: 4, recipeId: 12 },
        { userId: 1, recipeId: 67 },
        { userId: 3, recipeId: 24 },
        { userId: 2, recipeId: 51 },
        { userId: 4, recipeId: 8 },
        { userId: 1, recipeId: 19 },
        { userId: 3, recipeId: 43 },
        { userId: 2, recipeId: 6 },
        { userId: 4, recipeId: 28 },
        { userId: 1, recipeId: 58 },
        { userId: 3, recipeId: 15 },
        { userId: 2, recipeId: 42 },
        { userId: 4, recipeId: 61 },
        { userId: 1, recipeId: 3 },
        { userId: 3, recipeId: 30 },
        { userId: 2, recipeId: 55 },
        { userId: 4, recipeId: 17 },
        { userId: 1, recipeId: 69 },
        { userId: 3, recipeId: 4 },
        { userId: 2, recipeId: 22 },
        { userId: 4, recipeId: 48 },
        { userId: 1, recipeId: 9 },
        { userId: 3, recipeId: 64 },
        { userId: 2, recipeId: 31 },
        { userId: 4, recipeId: 59 },
        { userId: 1, recipeId: 14 },
        { userId: 3, recipeId: 38 },
        { userId: 2, recipeId: 1 },
        { userId: 4, recipeId: 25 },
        { userId: 1, recipeId: 52 },
        { userId: 3, recipeId: 10 },
        { userId: 2, recipeId: 45 },
        { userId: 4, recipeId: 63 },
        { userId: 1, recipeId: 7 },
        { userId: 3, recipeId: 33 },
        { userId: 2, recipeId: 57 },
        { userId: 4, recipeId: 20 },
        { userId: 1, recipeId: 65 },
        { userId: 3, recipeId: 47 },
        { userId: 2, recipeId: 11 },
        { userId: 4, recipeId: 34 },
        { userId: 1, recipeId: 5 },
        { userId: 3, recipeId: 29 },
        { userId: 2, recipeId: 53 },
        { userId: 4, recipeId: 16 },
        { userId: 1, recipeId: 68 },
        { userId: 3, recipeId: 37 },
        { userId: 2, recipeId: 2 },
        { userId: 4, recipeId: 49 },
        { userId: 1, recipeId: 21 },
        { userId: 3, recipeId: 60 },
        { userId: 2, recipeId: 32 },
        { userId: 4, recipeId: 56 },
        { userId: 1, recipeId: 13 },
        { userId: 3, recipeId: 40 },
        { userId: 2, recipeId: 70 },
        { userId: 4, recipeId: 27 },
        { userId: 1, recipeId: 54 },
        { userId: 3, recipeId: 18 },
        { userId: 2, recipeId: 44 },
        { userId: 4, recipeId: 66 },
        { userId: 1, recipeId: 10 },
        { userId: 3, recipeId: 39 },
        { userId: 2, recipeId: 23 },
        { userId: 4, recipeId: 46 },
        { userId: 1, recipeId: 62 },
        { userId: 3, recipeId: 36 },
        { userId: 2, recipeId: 7 },
        { userId: 4, recipeId: 3 },
        { userId: 1, recipeId: 33 },
        { userId: 3, recipeId: 50 },
        { userId: 2, recipeId: 14 },
        { userId: 4, recipeId: 41 },
        { userId: 1, recipeId: 57 },
        { userId: 3, recipeId: 26 },
        { userId: 2, recipeId: 69 },
        { userId: 4, recipeId: 11 },
        { userId: 1, recipeId: 40 },
        { userId: 3, recipeId: 5 },
        { userId: 2, recipeId: 16 },
        { userId: 4, recipeId: 38 },
        { userId: 1, recipeId: 59 },
        { userId: 3, recipeId: 21 },
        { userId: 2, recipeId: 64 },
        { userId: 4, recipeId: 1 },
        { userId: 1, recipeId: 47 },
        { userId: 3, recipeId: 9 },
        { userId: 2, recipeId: 29 },
        { userId: 4, recipeId: 54 },
        { userId: 1, recipeId: 18 },
        { userId: 3, recipeId: 45 },
        { userId: 2, recipeId: 61 },
        { userId: 4, recipeId: 23 },
        { userId: 1, recipeId: 50 },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RecFavourites", null, {});
  },
};
