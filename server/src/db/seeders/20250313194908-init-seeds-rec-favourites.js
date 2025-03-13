"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecFavourites",
      [
        {
          title: "Мохито",
          text: "Освежающий кубинский коктейль с ромом, мятой и лаймом.",
          img: "mojito.jpg",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Маргарита",
          text: "Классический коктейль с текилой, лаймом и апельсиновым ликером.",
          img: "margarita.jpg",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Пина Колада",
          text: "Тропический коктейль с ромом, кокосовым кремом и ананасовым соком.",
          img: "pinacolada.jpg",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Эспрессо Мартини",
          text: "Коктейль с водкой, кофейным ликером и свежесваренным эспрессо.",
          img: "espressomartini.jpg",
          strengthLevel: "средний",
          isShot: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RecFavourites", null, {});
  },
};
