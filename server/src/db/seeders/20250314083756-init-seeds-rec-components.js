"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecComponents",
      [
        { recipeId: 1, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 1, ingredientTypeId: 72, quantity: "10 веточек" }, // Мята
        { recipeId: 1, ingredientTypeId: 38, quantity: "30 мл" }, // Сок лайма
        { recipeId: 1, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный
        { recipeId: 1, ingredientTypeId: 44, quantity: "до верха" }, // Содовая
        { recipeId: 1, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 2, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 2, ingredientTypeId: 45, quantity: "до верха" }, // Кола
        { recipeId: 2, ingredientTypeId: 77, quantity: "1 долька" }, // Лайм (долька)
        { recipeId: 2, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 3, ingredientTypeId: 2, quantity: "60 мл" }, // Ром (светлый)
        { recipeId: 3, ingredientTypeId: 38, quantity: "30 мл" }, // Сок лайма
        { recipeId: 3, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный
        { recipeId: 3, ingredientTypeId: 82, quantity: "полный шейкер" }, // Лед

        { recipeId: 4, ingredientTypeId: 1, quantity: "45 мл" }, // Виски
        { recipeId: 4, ingredientTypeId: 37, quantity: "30 мл" }, // Сок лимонный
        { recipeId: 4, ingredientTypeId: 53, quantity: "15 мл" }, // Сироп сахарный
        { recipeId: 4, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед
        { recipeId: 4, ingredientTypeId: 69, quantity: "1 шт" }, // Мараскиновая вишня

        { recipeId: 5, ingredientTypeId: 6, quantity: "50 мл" }, // Текила (бланко)
        { recipeId: 5, ingredientTypeId: 11, quantity: "25 мл" }, // Куантро
        { recipeId: 5, ingredientTypeId: 38, quantity: "25 мл" }, // Сок лайма
        { recipeId: 5, ingredientTypeId: 82, quantity: "полный шейкер" }, // Лед
        { recipeId: 5, ingredientTypeId: 66, quantity: "по вкусу" }, // Соль (для каемки)

        { recipeId: 6, ingredientTypeId: 6, quantity: "50 мл" }, // Текила (бланко)
        { recipeId: 6, ingredientTypeId: 34, quantity: "150 мл" }, // Сок апельсиновый
        { recipeId: 6, ingredientTypeId: 54, quantity: "15 мл" }, // Сироп гренадин
        { recipeId: 6, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 7, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 7, ingredientTypeId: 34, quantity: "150 мл" }, // Сок апельсиновый
        { recipeId: 7, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 8, ingredientTypeId: 5, quantity: "40 мл" }, // Водка
        { recipeId: 8, ingredientTypeId: 11, quantity: "20 мл" }, // Куантро
        { recipeId: 8, ingredientTypeId: 36, quantity: "40 мл" }, // Сок клюквенный
        { recipeId: 8, ingredientTypeId: 38, quantity: "10 мл" }, // Сок лайма
        { recipeId: 8, ingredientTypeId: 82, quantity: "полный шейкер" }, // Лед

        { recipeId: 9, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 9, ingredientTypeId: 21, quantity: "30 мл" }, // Ликер кофейный
        { recipeId: 9, ingredientTypeId: 60, quantity: "30 мл" }, // Сливки
        { recipeId: 9, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 10, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 10, ingredientTypeId: 21, quantity: "30 мл" }, // Ликер кофейный
        { recipeId: 10, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 11, ingredientTypeId: 1, quantity: "60 мл" }, // Виски
        { recipeId: 11, ingredientTypeId: 16, quantity: "30 мл" }, // Вермут (сладкий)
        { recipeId: 11, ingredientTypeId: 28, quantity: "2 капли" }, // Биттер Ангостура
        {
          recipeId: 11,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед
        { recipeId: 11, ingredientTypeId: 69, quantity: "1 шт" }, // Мараскиновая вишня

        { recipeId: 12, ingredientTypeId: 4, quantity: "30 мл" }, // Джин
        { recipeId: 12, ingredientTypeId: 14, quantity: "30 мл" }, // Кампари
        { recipeId: 12, ingredientTypeId: 16, quantity: "30 мл" }, // Вермут (сладкий)
        { recipeId: 12, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед
        { recipeId: 12, ingredientTypeId: 71, quantity: "1 полоска" }, // Цедра апельсина

        { recipeId: 13, ingredientTypeId: 4, quantity: "60 мл" }, // Джин
        { recipeId: 13, ingredientTypeId: 15, quantity: "10 мл" }, // Вермут (сухой)
        {
          recipeId: 13,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед
        { recipeId: 13, ingredientTypeId: 68, quantity: "1 шт" }, // Оливки

        { recipeId: 14, ingredientTypeId: 13, quantity: "60 мл" }, // Апероль
        { recipeId: 14, ingredientTypeId: 20, quantity: "90 мл" }, // Игристое вино
        { recipeId: 14, ingredientTypeId: 44, quantity: "30 мл" }, // Содовая
        { recipeId: 14, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 15, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 15, ingredientTypeId: 47, quantity: "100 мл" }, // Кокосовое молоко
        { recipeId: 15, ingredientTypeId: 35, quantity: "100 мл" }, // Сок ананасовый
        { recipeId: 15, ingredientTypeId: 82, quantity: "полный блендер" }, // Лед
        { recipeId: 15, ingredientTypeId: 69, quantity: "1 шт" }, // Мараскиновая вишня

        { recipeId: 16, ingredientTypeId: 5, quantity: "15 мл" }, // Водка
        { recipeId: 16, ingredientTypeId: 4, quantity: "15 мл" }, // Джин
        { recipeId: 16, ingredientTypeId: 2, quantity: "15 мл" }, // Ром
        { recipeId: 16, ingredientTypeId: 6, quantity: "15 мл" }, // Текила
        { recipeId: 16, ingredientTypeId: 12, quantity: "15 мл" }, // Трипл сек
        { recipeId: 16, ingredientTypeId: 37, quantity: "25 мл" }, // Сок лимонный
        { recipeId: 16, ingredientTypeId: 45, quantity: "до верха" }, // кола
        { recipeId: 16, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 17, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 17, ingredientTypeId: 35, quantity: "120 мл" }, // Сок ананасовый
        { recipeId: 17, ingredientTypeId: 64, quantity: "2 дэша" }, // Соус Ворчестер
        { recipeId: 17, ingredientTypeId: 65, quantity: "2 дэша" }, // Табаско
        { recipeId: 17, ingredientTypeId: 66, quantity: "по вкусу" }, // соль
        { recipeId: 17, ingredientTypeId: 67, quantity: "по вкусу" }, // перец
        { recipeId: 17, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 18, ingredientTypeId: 4, quantity: "30 мл" }, // Джин
        { recipeId: 18, ingredientTypeId: 37, quantity: "15 мл" }, // Сок лимонный
        { recipeId: 18, ingredientTypeId: 53, quantity: "10 мл" }, // Сироп сахарный
        { recipeId: 18, ingredientTypeId: 20, quantity: "до верха" }, // Игристое вино
        { recipeId: 18, ingredientTypeId: 82, quantity: "полный шейкер" }, // Лед

        { recipeId: 19, ingredientTypeId: 2, quantity: "50 мл" }, // Ром
        { recipeId: 19, ingredientTypeId: 38, quantity: "1 лайм" }, // Сок лайма
        { recipeId: 19, ingredientTypeId: 53, quantity: "2 ч.л." }, // Сироп сахарный
        { recipeId: 19, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 20, ingredientTypeId: 2, quantity: "30 мл" }, // Ром (светлый)
        { recipeId: 20, ingredientTypeId: 3, quantity: "30 мл" }, // Ром (темный)
        { recipeId: 20, ingredientTypeId: 11, quantity: "15 мл" }, // Куантро
        { recipeId: 20, ingredientTypeId: 10, quantity: "15 мл" }, // Амаретто
        { recipeId: 20, ingredientTypeId: 38, quantity: "30 мл" }, // Сок лайма
        { recipeId: 20, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 21, ingredientTypeId: 5, quantity: "40 мл" }, // Водка
        { recipeId: 21, ingredientTypeId: 25, quantity: "20 мл" }, // Персиковый ликер
        { recipeId: 21, ingredientTypeId: 36, quantity: "40 мл" }, // Клюквенный сок
        { recipeId: 21, ingredientTypeId: 35, quantity: "40 мл" }, // Ананасовый сок
        { recipeId: 21, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 22, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 22, ingredientTypeId: 2, quantity: "20 мл" }, // Ром (светлый)
        { recipeId: 22, ingredientTypeId: 48, quantity: "до верха" }, // Лимонад
        { recipeId: 22, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 23, ingredientTypeId: 2, quantity: "15 мл" }, // Ром (светлый)
        { recipeId: 23, ingredientTypeId: 20, quantity: "до верха" }, // Игристое вино

        { recipeId: 24, ingredientTypeId: 4, quantity: "50 мл" }, // Джин
        { recipeId: 24, ingredientTypeId: 43, quantity: "до верха" }, // Тоник
        { recipeId: 24, ingredientTypeId: 77, quantity: "1 долька" }, // Лайм (долька)
        { recipeId: 24, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 25, ingredientTypeId: 5, quantity: "60 мл" }, // Водка
        { recipeId: 25, ingredientTypeId: 49, quantity: "до верха" }, // Имбирное пиво
        { recipeId: 25, ingredientTypeId: 38, quantity: "10 мл" }, // Сок лайма
        { recipeId: 25, ingredientTypeId: 82, quantity: "полная кружка" }, // Лед

        { recipeId: 26, ingredientTypeId: 6, quantity: "50 мл" }, // Текила (бланко)
        { recipeId: 26, ingredientTypeId: 39, quantity: "до верха" }, // Сок грейпфрутовый
        { recipeId: 26, ingredientTypeId: 38, quantity: "10 мл" }, // Сок лайма
        { recipeId: 26, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 27, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 27, ingredientTypeId: 21, quantity: "20 мл" }, // Ликер кофейный
        { recipeId: 27, ingredientTypeId: 41, quantity: "1 порция" }, // Яблочный сок
        { recipeId: 27, ingredientTypeId: 82, quantity: "полный шейкер" }, // Лед

        { recipeId: 28, ingredientTypeId: 2, quantity: "60 мл" }, // Ром (светлый)
        { recipeId: 28, ingredientTypeId: 38, quantity: "30 мл" }, // Сок лайма
        { recipeId: 28, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный
        { recipeId: 28, ingredientTypeId: 76, quantity: "100 гр" }, // Клубника

        { recipeId: 29, ingredientTypeId: 72, quantity: "10 веточек" }, // Мята
        { recipeId: 29, ingredientTypeId: 77, quantity: "1/2 лайма" }, // Лайм (долька)
        { recipeId: 29, ingredientTypeId: 76, quantity: "5 шт" }, // Клубника
        { recipeId: 29, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный
        { recipeId: 29, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 29, ingredientTypeId: 44, quantity: "до верха" }, // Содовая

        { recipeId: 30, ingredientTypeId: 6, quantity: "50 мл" }, // Текила (бланко)
        { recipeId: 30, ingredientTypeId: 11, quantity: "20 мл" }, // Куантро
        { recipeId: 30, ingredientTypeId: 38, quantity: "20 мл" }, // Сок лайма
        { recipeId: 30, ingredientTypeId: 57, quantity: "50 гр" }, // Пюре клубники

        { recipeId: 31, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 31, ingredientTypeId: 45, quantity: "до верха" }, // Кола
        { recipeId: 31, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный

        { recipeId: 32, ingredientTypeId: 5, quantity: "40 мл" }, // Водка
        { recipeId: 32, ingredientTypeId: 23, quantity: "15 мл" }, // Вишневый ликер (Kirsch)
        { recipeId: 32, ingredientTypeId: 35, quantity: "60 мл" }, // Ананасовый сок

        { recipeId: 33, ingredientTypeId: 4, quantity: "60 мл" }, // Джин
        { recipeId: 33, ingredientTypeId: 44, quantity: "до верха" }, // Содовая
        { recipeId: 33, ingredientTypeId: 38, quantity: "20 мл" }, // Сок лайма

        { recipeId: 34, ingredientTypeId: 1, quantity: "50 мл" }, // Виски
        { recipeId: 34, ingredientTypeId: 45, quantity: "до верха" }, // Кола
        { recipeId: 34, ingredientTypeId: 37, quantity: "15 мл" }, // Сок лимонный

        { recipeId: 35, ingredientTypeId: 1, quantity: "50 мл" }, // Виски
        { recipeId: 35, ingredientTypeId: 59, quantity: "2 ч.л." }, // Мед
        { recipeId: 35, ingredientTypeId: 37, quantity: "10 мл" }, // Сок лимонный

        { recipeId: 36, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 36, ingredientTypeId: 59, quantity: "2 ч.л." }, // Мед
        { recipeId: 36, ingredientTypeId: 37, quantity: "10 мл" }, // Сок лимонный

        { recipeId: 37, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 37, ingredientTypeId: 37, quantity: "10 мл" }, // Сок лимонный
        { recipeId: 37, ingredientTypeId: 1, quantity: "150 мл" }, // Виски

        { recipeId: 38, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 38, ingredientTypeId: 50, quantity: "150 мл" }, // Энергетик (Red Bull)

        { recipeId: 39, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 39, ingredientTypeId: 50, quantity: "75 мл" }, // Энергетик (Red Bull)
        { recipeId: 39, ingredientTypeId: 34, quantity: "75 мл" }, // Сок апельсиновый

        { recipeId: 40, ingredientTypeId: 4, quantity: "50 мл" }, // Джин
        { recipeId: 40, ingredientTypeId: 43, quantity: "150 мл" }, // Тоник
        { recipeId: 40, ingredientTypeId: 75, quantity: "2 ломтика" }, // Огурец

        { recipeId: 41, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 41, ingredientTypeId: 36, quantity: "150 мл" }, // Сок клюквенный

        { recipeId: 42, ingredientTypeId: 1, quantity: "150 мл" }, // Виски
        { recipeId: 42, ingredientTypeId: 22, quantity: "30 мл" }, // Ликер сливочный

        { recipeId: 43, ingredientTypeId: 6, quantity: "50 мл" }, // Текила (бланко)
        { recipeId: 43, ingredientTypeId: 44, quantity: "до верха" }, // Содовая

        { recipeId: 44, ingredientTypeId: 21, quantity: "1/3" }, // Ликер кофейный
        { recipeId: 44, ingredientTypeId: 22, quantity: "1/3" }, // Ликер сливочный
        { recipeId: 44, ingredientTypeId: 34, quantity: "1/3" }, // Сок апельсиновый

        { recipeId: 45, ingredientTypeId: 79, quantity: "25 мл" }, // Самбука
        { recipeId: 45, ingredientTypeId: 80, quantity: "15 мл" }, // Irish cream
        { recipeId: 45, ingredientTypeId: 54, quantity: "5 мл" }, // Сироп гренадин

        { recipeId: 46, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 46, ingredientTypeId: 35, quantity: "150 мл" }, // Сок ананасовый
        { recipeId: 46, ingredientTypeId: 65, quantity: "2 дэша" }, // Табаско

        { recipeId: 47, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 47, ingredientTypeId: 36, quantity: "150 мл" }, // Сок клюквенный
        { recipeId: 47, ingredientTypeId: 38, quantity: "10 мл" }, // Сок лайма

        { recipeId: 48, ingredientTypeId: 1, quantity: "50 мл" }, // Виски
        { recipeId: 48, ingredientTypeId: 41, quantity: "150 мл" }, // Яблочный сок
        { recipeId: 48, ingredientTypeId: 78, quantity: "по вкусу" }, // Корица

        { recipeId: 49, ingredientTypeId: 4, quantity: "50 мл" }, // Джин
        { recipeId: 49, ingredientTypeId: 35, quantity: "100 мл" }, // Ананасовый сок
        { recipeId: 49, ingredientTypeId: 56, quantity: "30 мл" }, // Сироп кокосовый

        { recipeId: 50, ingredientTypeId: 2, quantity: "50 мл" }, // Ром (светлый)
        { recipeId: 50, ingredientTypeId: 35, quantity: "100 мл" }, // сок ананасовый
        { recipeId: 50, ingredientTypeId: 38, quantity: "10 мл" }, // Сок лайма

        { recipeId: 51, ingredientTypeId: 32, quantity: "40 мл" }, // Ягермейстер
        { recipeId: 51, ingredientTypeId: 50, quantity: "150 мл" }, // Энергетик (Red Bull)
        {
          recipeId: 51,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 52, ingredientTypeId: 33, quantity: "50 мл" }, // Бехеровка
        { recipeId: 52, ingredientTypeId: 37, quantity: "25 мл" }, // Сок лимонный
        { recipeId: 52, ingredientTypeId: 53, quantity: "15 мл" }, // Сироп сахарный
        { recipeId: 52, ingredientTypeId: 71, quantity: "цедра" }, // Цедра апельсина
        {
          recipeId: 52,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 53, ingredientTypeId: 32, quantity: "40 мл" }, // Ягермейстер
        { recipeId: 53, ingredientTypeId: 38, quantity: "20 мл" }, // Сок лайма
        { recipeId: 53, ingredientTypeId: 49, quantity: "150 мл" }, // Имбирное пиво
        { recipeId: 53, ingredientTypeId: 77, quantity: "долька" }, // Лайм (долька)
        { recipeId: 53, ingredientTypeId: 82, quantity: "полная кружка" }, // Лед

        { recipeId: 54, ingredientTypeId: 33, quantity: "50 мл" }, // Бехеровка
        { recipeId: 54, ingredientTypeId: 37, quantity: "25 мл" }, // Сок лимонный
        { recipeId: 54, ingredientTypeId: 53, quantity: "20 мл" }, // Сироп сахарный
        { recipeId: 54, ingredientTypeId: 61, quantity: "20 мл" }, // Яичный белок
        { recipeId: 54, ingredientTypeId: 71, quantity: "цедра" }, // Цедра апельсина
        {
          recipeId: 54,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 55, ingredientTypeId: 32, quantity: "50 мл" }, // Ягермейстер
        { recipeId: 55, ingredientTypeId: 66, quantity: "1 ч.л." }, // Соль
        { recipeId: 55, ingredientTypeId: 28, quantity: "2 дэша" }, // Биттер Ангостура
        {
          recipeId: 55,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 56, ingredientTypeId: 33, quantity: "30 мл" }, // Бехеровка
        { recipeId: 56, ingredientTypeId: 4, quantity: "30 мл" }, // Джин
        { recipeId: 56, ingredientTypeId: 28, quantity: "2 дэша" }, // Биттер Ангостура
        {
          recipeId: 56,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 57, ingredientTypeId: 32, quantity: "45 мл" }, // Ягермейстер
        { recipeId: 57, ingredientTypeId: 6, quantity: "30 мл" }, // Текила (бланко)
        { recipeId: 57, ingredientTypeId: 38, quantity: "30 мл" }, // Сок лайма
        {
          recipeId: 57,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед
        { recipeId: 57, ingredientTypeId: 66, quantity: "по вкусу" }, // Соль

        { recipeId: 58, ingredientTypeId: 33, quantity: "50 мл" }, // Бехеровка
        { recipeId: 58, ingredientTypeId: 43, quantity: "до верха" }, // Тоник
        { recipeId: 58, ingredientTypeId: 71, quantity: "цедра" }, // Цедра апельсина
        { recipeId: 58, ingredientTypeId: 82, quantity: "полный бокал" }, // Лед

        { recipeId: 59, ingredientTypeId: 32, quantity: "40 мл" }, // Ягермейстер
        { recipeId: 59, ingredientTypeId: 50, quantity: "150 мл" }, // Энергетик (Red Bull)

        { recipeId: 60, ingredientTypeId: 33, quantity: "50 мл" }, // Бехеровка
        { recipeId: 60, ingredientTypeId: 38, quantity: "20 мл" }, // Сок лайма
        { recipeId: 60, ingredientTypeId: 49, quantity: "150 мл" }, // Имбирное пиво
        { recipeId: 60, ingredientTypeId: 77, quantity: "долька" }, // Лайм (долька)
        { recipeId: 60, ingredientTypeId: 82, quantity: "полная кружка" }, // Лед

        { recipeId: 61, ingredientTypeId: 4, quantity: "30 мл" }, // Джин
        { recipeId: 61, ingredientTypeId: 33, quantity: "30 мл" }, // Бехеровка
        { recipeId: 61, ingredientTypeId: 37, quantity: "20 мл" }, // Сок лимона
        { recipeId: 61, ingredientTypeId: 53, quantity: "10 мл" }, // Сироп сахарный
        {
          recipeId: 61,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 62, ingredientTypeId: 32, quantity: "50 мл" }, // Ягермейстер
        { recipeId: 62, ingredientTypeId: 41, quantity: "150 мл" }, // Яблочный сок
        {
          recipeId: 62,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед
        { recipeId: 63, ingredientTypeId: 4, quantity: "60 мл" }, // Джин
        { recipeId: 63, ingredientTypeId: 37, quantity: "20 мл" }, // Сок лимона
        { recipeId: 63, ingredientTypeId: 59, quantity: "20 мл" }, // Мед

        { recipeId: 64, ingredientTypeId: 4, quantity: "40 мл" }, // Джин
        { recipeId: 64, ingredientTypeId: 11, quantity: "20 мл" }, // Куантро
        { recipeId: 64, ingredientTypeId: 37, quantity: "20 мл" }, // Сок лимона
        { recipeId: 64, ingredientTypeId: 61, quantity: "1 белок" }, // Яичный белок

        { recipeId: 65, ingredientTypeId: 8, quantity: "50 мл" }, // Бренди
        { recipeId: 65, ingredientTypeId: 11, quantity: "20 мл" }, // Куантро
        { recipeId: 65, ingredientTypeId: 37, quantity: "20 мл" }, // Сок лимона

        { recipeId: 66, ingredientTypeId: 1, quantity: "30 мл" }, // Виски
        { recipeId: 66, ingredientTypeId: 9, quantity: "30 мл" }, // Коньяк
        { recipeId: 66, ingredientTypeId: 16, quantity: "30 мл" }, // Вермут (сладкий)
        { recipeId: 66, ingredientTypeId: 81, quantity: "2 дэша" }, // Бенедиктин
        { recipeId: 66, ingredientTypeId: 28, quantity: "1 дэш" }, // Биттер Ангостура

        { recipeId: 67, ingredientTypeId: 1, quantity: "60 мл" }, // Виски
        { recipeId: 67, ingredientTypeId: 66, quantity: "1 ч.л." }, // Соль
        { recipeId: 67, ingredientTypeId: 28, quantity: "2 дэша" }, // Биттер Ангостура
        {
          recipeId: 67,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед

        { recipeId: 68, ingredientTypeId: 1, quantity: "40 мл" }, // Виски
        { recipeId: 68, ingredientTypeId: 16, quantity: "30 мл" }, // Вермут (сладкий)
        { recipeId: 68, ingredientTypeId: 14, quantity: "30 мл" }, // Кампари

        { recipeId: 69, ingredientTypeId: 5, quantity: "45 мл" }, // Водка
        { recipeId: 69, ingredientTypeId: 23, quantity: "15 мл" }, // Вишневый ликер (Kirsch)
        { recipeId: 69, ingredientTypeId: 35, quantity: "30 мл" }, // Ананасовый сок

        { recipeId: 70, ingredientTypeId: 5, quantity: "50 мл" }, // Водка
        { recipeId: 70, ingredientTypeId: 21, quantity: "20 мл" }, // Ликер кофейный
        { recipeId: 70, ingredientTypeId: 41, quantity: "1 порция" }, // Яблочный сок
        {
          recipeId: 70,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Лед
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RecComponents", null, {});
  },
};
