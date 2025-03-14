"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
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
        {
          type: "Ром Белый",
          title: "Bacardi",
          strength: "40%",
        },
        {
          type: "Текила Белая",
          title: "Olmeca blanco",
          strength: "40%",
        },
        {
          type: "Джин",
          title: "Gordon's",
          strength: "47%",
        },
        {
          type: "Ликер",
          title: "Campari",
          strength: "25%",
        },
        {
          type: "Ликер",
          title: "Cointreau",
          strength: "40%",
        },
        {
          type: "Ликер",
          title: "Кофейный ликер (Kahlúa)",
          strength: "20%",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
