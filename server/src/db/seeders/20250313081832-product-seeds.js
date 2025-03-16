/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Шейкер",
        image: "https://img.freepik.com/free-photo/flay-lay-cocktail-essentials-with-lime-mint_23-2148454400.jpg?t=st=1741854098~exp=1741857698~hmac=1236251bcbb2cf4a5862963300a5f457adbc478d3a805e9813d2576d1a5d2ecb&w=1060",
        price: 1500.00,
        description: "Классический барный шейкер для приготовления коктейлей.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Барный стакан для смешивания",
        image: "https://ir.ozone.ru/s3/multimedia-m/c800/6707254630.jpg",
        price: 1200.00,
        description: "Прочный стеклянный стакан для смешивания коктейлей.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Мерный стакан",
        image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/125/162/311/312/512/27/600010066991b1.jpeg",
        price: 800.00,
        description: "Точный мерный стакан для барменов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Джиггер",
        image: "https://img.freepik.com/free-photo/preparing-refreshing-cocktail-bar_23-2148176737.jpg?ga=GA1.1.219410496.1740647111&semt=ais_authors_boost",
        price: 500.00,
        description: "Двусторонний мерный джиггер для точных измерений.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Барная ложка",
        image: "https://img.freepik.com/free-photo/top-view-golden-spoons_23-2148816285.jpg?t=st=1741854597~exp=1741858197~hmac=974d4fc36c6f476976a3f6d45566f2dcf8246cee9285040288d9105c59994b0b&w=740",
        price: 400.00,
        description: "Удобная барная ложка с закрученной ручкой.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Мадлер",
        image: "https://sc01.alicdn.com/kf/Hd907ec1001c6479fbb1c19cadfff461du/229528574/Hd907ec1001c6479fbb1c19cadfff461du.jpg",
        price: 600.00,
        description: "Мадлер для раздавливания фруктов и трав.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Стейнер",
        image: "https://avatars.mds.yandex.net/get-mpic/6321906/2a00000191848ec4fda78160736058494266/optimize",
        price: 700.00,
        description: "Ситечко-стрейнер для коктейлей.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Барный гейзер",
        image: "https://avatars.mds.yandex.net/get-mpic/5316009/img_id6361937653769488376.jpeg/optimize",
        price: 300.00,
        description: "Насадка-гейзер для бутылок.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Сквизер",
        image: "https://avatars.mds.yandex.net/get-mpic/1514097/2a00000191864b494a6f8947ccca05a658f5/optimize",
        price: 900.00,
        description: "Пресс для выжимки цитрусовых.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Риммер",
        image: "https://cdn1.ozone.ru/s3/multimedia-1-e/6996908534.jpg",
        price: 750.00,
        description: "Устройство для нанесения соли или сахара на края бокалов.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Штопор",
        image: "https://static.onlinetrade.ru/img/items/b/podarochnyy_nabor_dlya_vina_vacu_vin_experience_2416450_7.jpg",
        price: 450.00,
        description: "Классический штопор для бутылок.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Нож для цедры",
        image: "https://adamantcom.ru/upload/masterglass/images/14591399171802970151/4034_43817.jpg",
        price: 650.00,
        description: "Специальный нож для снятия цедры.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Щипцы для льда и айс-бакет",
        image: "https://img.joomcdn.net/df2ed35fbf023f7c37678009dba247786ba88fdc_1024_1024.jpeg",
        price: 1100.00,
        description: "Набор: ведро для льда и щипцы.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Сифон",
        image: "https://avatars.mds.yandex.net/get-mpic/1855911/img_id3290641034727827176.jpeg/orig",
        price: 4500.00,
        description: "Сифон для газирования воды и коктейлей.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Шпажки, соломинки и зонтики",
        image: "https://avatars.mds.yandex.net/get-mpic/3907807/2a000001911de3b4d87dc24318a6e6c21378/orig",
        price: 200.00,
        description: "Набор для украшения коктейлей.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};