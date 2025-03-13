"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ingredients",
      [
        {
          type: "Водка",
          title: "Absolute",
          strength: "40%",
        },
        {
          type: "Ликер",
          title: "Jägermeister",
          strength: "35%",
        },
        {
          type: "Виски",
          title: "Jack Daniels",
          strength: "40%",
        },
        {
          type: "Пиво",
          title: "Козел",
          strength: "4%",
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
