"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Ingredients",
      [
        //Алкогольные
        {
          type: "Абрикосовый ликер",
          isAlko: true,
          imgUrl: "/ingredients/Абрикосовый ликер.png",
        },
        { type: "Абсент", isAlko: true, imgUrl: "/ingredients/default.png" },
        {
          type: "Анчо Рейес (ликер чили)",
          isAlko: true,
          imgUrl: "/ingredients/Анчо Рейес (ликер чили).png",
        },
        { type: "Амаретто", isAlko: true, imgUrl: "/ingredients/Амаретто.png" },
        { type: "Апероль", isAlko: true, imgUrl: "/ingredients/Апероль.png" },
        {
          type: "Биттер Ангостура",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Ангостура.png",
        },
        {
          type: "Биттер Апельсиновый",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Апельсиновый.png",
        },
        {
          type: "Биттер Пейшо",
          isAlko: true,
          imgUrl: "/ingredients/Биттер Пейшо.png",
        },
        {
          type: "Блю Кюрасао",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
        { type: "Бренди", isAlko: true, imgUrl: "/ingredients/Бренди.png" },
        { type: "Бурбон", isAlko: true, imgUrl: "/ingredients/default.png" },
        {
          type: "Бенедиктин",
          isAlko: true,
          imgUrl: "/ingredients/Бенедиктин.png",
        },
        {
          type: "Бехеровка",
          isAlko: true,
          imgUrl: "/ingredients/Бехеровка.png",
        },
        {
          type: "Ванильная водка",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
        {
          type: "Вермут (сухой)",
          isAlko: true,
          imgUrl: "/ingredients/Вермут (сухой).png",
        },
        {
          type: "Вино (белое)",
          isAlko: true,
          imgUrl: "/ingredients/Вино (белое).png",
        },
        {
          type: "Вино (красное)",
          isAlko: true,
          imgUrl: "/ingredients/Вино (красное).png",
        },
        { type: "Виски", isAlko: true, imgUrl: "/ingredients/Виски.png" },
        {
          type: "Вишневый ликер (Kirsch)",
          isAlko: true,
          imgUrl: "/ingredients/Вишневый ликер (Kirsch).png",
        },
        { type: "Водка", isAlko: true, imgUrl: "/ingredients/Водка.png" },
        { type: "Джин", isAlko: true, imgUrl: "/ingredients/Джин.png" },
        {
          type: "Игристое вино",
          isAlko: true,
          imgUrl: "/ingredients/Игристое вино.png",
        },
        { type: "Кампари", isAlko: true, imgUrl: "/ingredients/Кампари.png" },
        { type: "Коньяк", isAlko: true, imgUrl: "/ingredients/Коньяк.png" },
        { type: "Куантро", isAlko: true, imgUrl: "/ingredients/Куантро.png" },
        {
          type: "Ликер Drambuie",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
        {
          type: "Ликер бузины (St. Germain)",
          isAlko: true,
          imgUrl: "/ingredients/Ликер бузины (St. Germain).png",
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
          type: "Лимончелло",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
        { type: "Малибу", isAlko: true, imgUrl: "/ingredients/default.png" },
        { type: "Midori", isAlko: true, imgUrl: "/ingredients/default.png" },
        {
          type: "Мятный ликер",
          isAlko: true,
          imgUrl: "/ingredients/Мятный ликер.png",
        },
        {
          type: "Персиковый ликер",
          isAlko: true,
          imgUrl: "/ingredients/Персиковый ликер.png",
        },
        { type: "Пиво", isAlko: true, imgUrl: "/ingredients/Пиво.png" },
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
        { type: "Саке", isAlko: true, imgUrl: "/ingredients/default.png" },
        { type: "Самбука", isAlko: true, imgUrl: "/ingredients/Самбука.png" },
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
        {
          type: "Трипл сек",
          isAlko: true,
          imgUrl: "/ingredients/Трипл сек.png",
        },
        {
          type: "Irish cream",
          isAlko: true,
          imgUrl: "/ingredients/Irish cream.png",
        },

        //Безалкогольные
        { type: "Ананасовый сок", isAlko: false, imgUrl: "" },
        { type: "Ванильный сироп", isAlko: false, imgUrl: "" },
        { type: "Гранатовый сок", isAlko: false, imgUrl: "" },
        { type: "Грейпфрутовый сок", isAlko: false, imgUrl: "" },
        { type: "Имбирный эль", isAlko: false, imgUrl: "" },
        { type: "Клубника", isAlko: false, imgUrl: "" },
        { type: "Клюквенный сок", isAlko: false, imgUrl: "" },
        { type: "Кокосовое молоко", isAlko: false, imgUrl: "" },
        { type: "Кола", isAlko: false, imgUrl: "" },
        { type: "Ананас", isAlko: false, imgUrl: "" },
        { type: "Корица", isAlko: false, imgUrl: "" },
        { type: "Лайм (долька)", isAlko: false, imgUrl: "" },
        { type: "Лед", isAlko: false, imgUrl: "" },
        { type: "Лимонный сок", isAlko: false, imgUrl: "" },
        { type: "Мёд", isAlko: false, imgUrl: "" },
        { type: "Мята", isAlko: false, imgUrl: "" },
        { type: "Огурец", isAlko: false, imgUrl: "" },
        { type: "Перец", isAlko: false, imgUrl: "" },
        { type: "Сахарный сироп", isAlko: false, imgUrl: "" },
        { type: "Сливки", isAlko: false, imgUrl: "" },
        { type: "Содовая", isAlko: false, imgUrl: "" },
        { type: "Сок лайма", isAlko: false, imgUrl: "" },
        { type: "Соль", isAlko: false, imgUrl: "" },
        { type: "Табаско", isAlko: false, imgUrl: "" },
        { type: "Томатный сок", isAlko: false, imgUrl: "" },
        { type: "Тоник", isAlko: false, imgUrl: "" },
        { type: "Яблочный сок", isAlko: false, imgUrl: "" },
        { type: "Яичный белок", isAlko: false, imgUrl: "" },

        //допы
        {
          type: "Ликер мараскино",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
        {
          type: "Ликер фиалковый",
          isAlko: true,
          imgUrl: "/ingredients/default.png",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
