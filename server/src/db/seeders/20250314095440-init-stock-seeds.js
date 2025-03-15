"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "UserStocks",
      [
        {
          ingredientTypeId: 1,
          ingredientBalance: "200",
          title: "Абсолют",
          strength: "40",
          userId: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("UserStocks", null, {});
  },
};
