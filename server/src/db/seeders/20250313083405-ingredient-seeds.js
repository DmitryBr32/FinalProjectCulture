"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Ingredients",
      [
        // Алкогольные напитки (33)
        { type: "Виски", isAlko: true, imgUrl: "/ingredients/Виски.png" },
        {
          type: "Ром (светлый)",
          isAlko: true,
          imgUrl: "/ingredients/Ром (светлый).png",
        },
        {
          type: "Ром (темный)",
          isAlko: true,
          imgUrl: "/ingredients/Ром (темный).png",
        },
        { type: "Джин", isAlko: true, imgUrl: "/ingredients/Джин.png" },
        { type: "Водка", isAlko: true, imgUrl: "/ingredients/Водка.png" },
        {
          type: "Текила (бланко)",
          isAlko: true,
          imgUrl: "/ingredients/Текила (бланко).png",
        },
        {
          type: "Текила (репосадо)",
          isAlko: true,
          imgUrl: "/ingredients/Текила (репосадо).png",
        },
        { type: "Бренди", isAlko: true, imgUrl: "/ingredients/Бренди.png" },
        { type: "Коньяк", isAlko: true, imgUrl: "/ingredients/Коньяк.png" },
        { type: "Амаретто", isAlko: true, imgUrl: "/ingredients/Амаретто.png" },
        { type: "Куантро", isAlko: true, imgUrl: "/ingredients/Куантро.png" },
        {
          type: "Трипл сек",
          isAlko: true,
          imgUrl: "/ingredients/Трипл сек.png",
        },
        { type: "Апероль", isAlko: true, imgUrl: "/ingredients/Апероль.png" },
        { type: "Кампари", isAlko: true, imgUrl: "/ingredients/Кампари.png" },
        {
          type: "Вермут (сухой)",
          isAlko: true,
          imgUrl: "/ingredients/Вермут (сухой).png",
        },
        {
          type: "Вермут (сладкий)",
          isAlko: true,
          imgUrl: "/ingredients/Вермут (сладкий).png",
        },
        { type: "Пиво", isAlko: true, imgUrl: "/ingredients/Пиво.png" },
        {
          type: "Вино (красное)",
          isAlko: true,
          imgUrl: "/ingredients/Вино (красное).png",
        },
        {
          type: "Вино (белое)",
          isAlko: true,
          imgUrl: "/ingredients/Вино (белое).png",
        },
        {
          type: "Игристое вино",
          isAlko: true,
          imgUrl: "/ingredients/Игристое вино.png",
        },
        {
          type: "Ликер кофейный",
          isAlko: true,
          imgUrl: "/ingredients/Ликер кофейный.png",
        },
        {
          type: "Ликер сливочный",
          isAlko: true,
          imgUrl: "/ingredients/Ликер сливочный.png",
        },
        {
          type: "Вишневый ликер (Kirsch)",
          isAlko: true,
          imgUrl: "/ingredients/Вишневый ликер (Kirsch).png",
        },
        {
          type: "Ликер бузины (St. Germain)",
          isAlko: true,
          imgUrl: "/ingredients/Ликер бузины (St. Germain).png",
        },
        {
          type: "Персиковый ликер",
          isAlko: true,
          imgUrl: "/ingredients/Персиковый ликер.png",
        },
        {
          type: "Мятный ликер",
          isAlko: true,
          imgUrl: "/ingredients/Мятный ликер.png",
        },
        {
          type: "Абрикосовый ликер",
          isAlko: true,
          imgUrl: "/ingredients/Абрикосовый ликер.png",
        },
        {
          type: "Биттер Ангостура",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Ангостура.png",
        },
        {
          type: "Биттер Пейшо",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Пейшо.png",
        },
        {
          type: "Биттер Апельсиновый",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Апельсиновый.png",
        },
        { type: "Анчо Рейес (ликер чили)", isAlko: true, imgUrl: "/ingredients/Анчо Рейес (ликер чили).png" },
        { type: "Ягермейстер", isAlko: true, imgUrl: "/ingredients/Ягермейстер.png" },
        { type: "Бехеровка", isAlko: true, imgUrl: "/ingredients/Бехеровка.png" },

        // Безалкогольные напитки (19)
        { type: "Сок апельсиновый", isAlko: false, imgUrl: "" },
        { type: "Сок ананасовый", isAlko: false, imgUrl: "" },
        { type: "Сок клюквенный", isAlko: false, imgUrl: "" },
        { type: "Сок лимонный", isAlko: false, imgUrl: "" },
        { type: "Сок лайма", isAlko: false, imgUrl: "" },
        { type: "Сок грейпфрутовый", isAlko: false, imgUrl: "" },
        { type: "Гранатовый сок", isAlko: false, imgUrl: "" },
        { type: "Яблочный сок", isAlko: false, imgUrl: "" },
        { type: "Виноградный сок", isAlko: false, imgUrl: "" },
        { type: "Тоник", isAlko: false, imgUrl: "" },
        { type: "Содовая", isAlko: false, imgUrl: "" },
        { type: "Кола", isAlko: false, imgUrl: "" },
        { type: "Имбирный эль", isAlko: false, imgUrl: "" },
        { type: "Кокосовое молоко", isAlko: false, imgUrl: "" },
        { type: "Лимонад", isAlko: false, imgUrl: "" },
        { type: "Имбирное пиво", isAlko: false, imgUrl: "" },
        { type: "Энергетик (Red Bull)", isAlko: false, imgUrl: "" },
        { type: "Энергетик (Monster)", isAlko: false, imgUrl: "" },
        { type: "Энергетик (Burn)", isAlko: false, imgUrl: "" },

        // Остальное (29)
        { type: "Сироп сахарный", isAlko: false, imgUrl: "" },
        { type: "Сироп гренадин", isAlko: false, imgUrl: "" },
        { type: "Сироп маракуйя", isAlko: false, imgUrl: "" },
        { type: "Сироп кокосовый", isAlko: false, imgUrl: "" },
        { type: "Пюре клубники", isAlko: false, imgUrl: "" },
        { type: "Пюре малины", isAlko: false, imgUrl: "" },
        { type: "Мед", isAlko: false, imgUrl: "" },
        { type: "Сливки", isAlko: false, imgUrl: "" },
        { type: "Яичный белок", isAlko: false, imgUrl: "" },
        { type: "Кленовый сироп", isAlko: false, imgUrl: "" },
        { type: "Сироп агавы", isAlko: false, imgUrl: "" },
        { type: "Соус Ворчестер", isAlko: false, imgUrl: "" },
        { type: "Табаско", isAlko: false, imgUrl: "" },
        { type: "Соль", isAlko: false, imgUrl: "" },
        { type: "Перец", isAlko: false, imgUrl: "" },
        { type: "Оливки", isAlko: false, imgUrl: "" },
        { type: "Мараскиновая вишня", isAlko: false, imgUrl: "" },
        { type: "Цедра лимона", isAlko: false, imgUrl: "" },
        { type: "Цедра апельсина", isAlko: false, imgUrl: "" },
        { type: "Мята", isAlko: false, imgUrl: "" },
        { type: "Розмарин", isAlko: false, imgUrl: "" },
        { type: "Базилик", isAlko: false, imgUrl: "" },
        { type: "Огурец", isAlko: false, imgUrl: "" },
        { type: "Клубника", isAlko: false, imgUrl: "" },
        { type: "Лайм (долька)", isAlko: false, imgUrl: "" },
        { type: "Корица", isAlko: false, imgUrl: "" },
        { type: "Самбука", isAlko: true, imgUrl: "/ingredients/Самбука.png" },
        { type: "Irish cream", isAlko: true, imgUrl: "/ingredients/Irish cream.png" },
        { type: "Бенедиктин", isAlko: true, imgUrl: "/ingredients/Бенедиктин.png" },

        // Лёд (1)
        { type: "Лёд", isAlko: false, imgUrl: "" },
        { type: "Сок томатный", isAlko: false, imgUrl: "" },
        //допы
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
