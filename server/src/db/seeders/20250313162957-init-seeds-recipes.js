"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Recipes",
      [
        {
          title: "Мохито",
          text: "Освежающий кубинский коктейль с ромом, мятой и лаймом.",
          img: "https://avatars.mds.yandex.net/get-shedevrum/11477113/img_b0efd07c047c11efb8e5e6d9644e1857/orig",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Маргарита",
          text: "Классический коктейль с текилой, лаймом и апельсиновым ликером.",
          img: "https://avatars.mds.yandex.net/i?id=488bcbea5dea532fa9dd3097a19f4da41c34c4c4-5874177-images-thumbs&n=13",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Пина Колада",
          text: "Тропический коктейль с ромом, кокосовым кремом и ананасовым соком.",
          img: "https://static.tildacdn.com/tild3633-6337-4734-b665-653436613038/--1200-1200.jpg",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Эспрессо Мартини",
          text: "Коктейль с водкой, кофейным ликером и свежесваренным эспрессо.",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/4384151/pub_633041abb5519e14689f5fe2_633044d7a017c6121624111d/scale_1200",
          strengthLevel: "средний",
          isShot: false,
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Recipes", null, {});
  },
};
