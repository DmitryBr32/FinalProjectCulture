"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "RecComponents",
      [
        { recipeId: 1, ingredientTypeId: 2, quantity: "50 мл" }, // Мохито - Ром (светлый)
        { recipeId: 1, ingredientTypeId: 72, quantity: "10 веточек" }, // Мохито - Мята
        { recipeId: 1, ingredientTypeId: 38, quantity: "30 мл" }, // Мохито - Сок лайма
        { recipeId: 1, ingredientTypeId: 53, quantity: "20 мл" }, // Мохито - Сироп сахарный
        { recipeId: 1, ingredientTypeId: 44, quantity: "до верха" }, // Мохито - Содовая
        { recipeId: 1, ingredientTypeId: 82, quantity: "полный бокал" }, // Мохито - Лед

        { recipeId: 2, ingredientTypeId: 2, quantity: "50 мл" }, // Куба Либре - Ром (светлый)
        { recipeId: 2, ingredientTypeId: 45, quantity: "до верха" }, // Куба Либре - Кола
        { recipeId: 2, ingredientTypeId: 77, quantity: "1 долька" }, // Куба Либре - Лайм (долька)
        { recipeId: 2, ingredientTypeId: 82, quantity: "полный бокал" }, // Куба Либре - Лед

        { recipeId: 3, ingredientTypeId: 2, quantity: "60 мл" }, // Дайкири - Ром (светлый)
        { recipeId: 3, ingredientTypeId: 38, quantity: "30 мл" }, // Дайкири - Сок лайма
        { recipeId: 3, ingredientTypeId: 53, quantity: "20 мл" }, // Дайкири - Сироп сахарный
        { recipeId: 3, ingredientTypeId: 82, quantity: "полный шейкер" }, // Дайкири - Лед

        { recipeId: 4, ingredientTypeId: 1, quantity: "45 мл" }, // Виски Сауэр - Виски
        { recipeId: 4, ingredientTypeId: 37, quantity: "30 мл" }, // Виски Сауэр - Сок лимонный
        { recipeId: 4, ingredientTypeId: 53, quantity: "15 мл" }, // Виски Сауэр - Сироп сахарный
        { recipeId: 4, ingredientTypeId: 82, quantity: "полный бокал" }, // Виски Сауэр - Лед
        { recipeId: 4, ingredientTypeId: 69, quantity: "1 шт" }, // Виски Сауэр - Мараскиновая вишня

        { recipeId: 5, ingredientTypeId: 6, quantity: "50 мл" }, // Маргарита - Текила (бланко)
        { recipeId: 5, ingredientTypeId: 11, quantity: "25 мл" }, // Маргарита - Куантро
        { recipeId: 5, ingredientTypeId: 38, quantity: "25 мл" }, // Маргарита - Сок лайма
        { recipeId: 5, ingredientTypeId: 82, quantity: "полный шейкер" }, // Маргарита - Лед
        { recipeId: 5, ingredientTypeId: 66, quantity: "по вкусу" }, // Маргарита - Соль

        { recipeId: 6, ingredientTypeId: 6, quantity: "50 мл" }, // Текила Санрайз - Текила (бланко)
        { recipeId: 6, ingredientTypeId: 34, quantity: "150 мл" }, // Текила Санрайз - Сок апельсиновый
        { recipeId: 6, ingredientTypeId: 54, quantity: "15 мл" }, // Текила Санрайз - Сироп гренадин
        { recipeId: 6, ingredientTypeId: 82, quantity: "полный бокал" }, // Текила Санрайз - Лед

        { recipeId: 7, ingredientTypeId: 5, quantity: "50 мл" }, // Отвертка - Водка
        { recipeId: 7, ingredientTypeId: 34, quantity: "150 мл" }, // Отвертка - Сок апельсиновый
        { recipeId: 7, ingredientTypeId: 82, quantity: "полный бокал" }, // Отвертка - Лед

        { recipeId: 8, ingredientTypeId: 5, quantity: "40 мл" }, // Космополитен - Водка
        { recipeId: 8, ingredientTypeId: 11, quantity: "20 мл" }, // Космополитен - Куантро
        { recipeId: 8, ingredientTypeId: 36, quantity: "40 мл" }, // Космополитен - Сок клюквенный
        { recipeId: 8, ingredientTypeId: 38, quantity: "10 мл" }, // Космополитен - Сок лайма
        { recipeId: 8, ingredientTypeId: 82, quantity: "полный шейкер" }, // Космополитен - Лед

        { recipeId: 9, ingredientTypeId: 5, quantity: "50 мл" }, // Белый русский - Водка
        { recipeId: 9, ingredientTypeId: 21, quantity: "30 мл" }, // Белый русский - Ликер кофейный
        { recipeId: 9, ingredientTypeId: 60, quantity: "30 мл" }, // Белый русский - Сливки
        { recipeId: 9, ingredientTypeId: 82, quantity: "полный бокал" }, // Белый русский - Лед

        { recipeId: 10, ingredientTypeId: 5, quantity: "50 мл" }, // Черный русский - Водка
        { recipeId: 10, ingredientTypeId: 21, quantity: "30 мл" }, // Черный русский - Ликер кофейный
        { recipeId: 10, ingredientTypeId: 82, quantity: "полный бокал" }, // Черный русский - Лед

        { recipeId: 11, ingredientTypeId: 1, quantity: "60 мл" }, // Манхэттен - Виски
        { recipeId: 11, ingredientTypeId: 16, quantity: "30 мл" }, // Манхэттен - Вермут (сладкий)
        { recipeId: 11, ingredientTypeId: 28, quantity: "2 капли" }, // Манхэттен - Биттер Ангостура
        {
          recipeId: 11,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Манхэттен - Лед
        { recipeId: 11, ingredientTypeId: 69, quantity: "1 шт" }, // Манхэттен - Мараскиновая вишня

        { recipeId: 12, ingredientTypeId: 4, quantity: "30 мл" }, // Негрони - Джин
        { recipeId: 12, ingredientTypeId: 14, quantity: "30 мл" }, // Негрони - Кампари
        { recipeId: 12, ingredientTypeId: 16, quantity: "30 мл" }, // Негрони - Вермут (сладкий)
        { recipeId: 12, ingredientTypeId: 82, quantity: "полный бокал" }, // Негрони - Лед
        { recipeId: 12, ingredientTypeId: 71, quantity: "1 полоска" }, // Негрони - Цедра апельсина

        { recipeId: 13, ingredientTypeId: 4, quantity: "60 мл" }, // Мартини - Джин
        { recipeId: 13, ingredientTypeId: 15, quantity: "10 мл" }, // Мартини - Вермут (сухой)
        {
          recipeId: 13,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Мартини - Лед
        { recipeId: 13, ingredientTypeId: 68, quantity: "1 шт" }, // Мартини - Оливки

        { recipeId: 14, ingredientTypeId: 13, quantity: "60 мл" }, // Апероль Шприц - Апероль
        { recipeId: 14, ingredientTypeId: 20, quantity: "90 мл" }, // Апероль Шприц - Игристое вино
        { recipeId: 14, ingredientTypeId: 44, quantity: "30 мл" }, // Апероль Шприц - Содовая
        { recipeId: 14, ingredientTypeId: 82, quantity: "полный бокал" }, // Апероль Шприц - Лед

        { recipeId: 15, ingredientTypeId: 2, quantity: "50 мл" }, // Пина Колада - Ром (светлый)
        { recipeId: 15, ingredientTypeId: 47, quantity: "100 мл" }, // Пина Колада - Кокосовое молоко
        { recipeId: 15, ingredientTypeId: 35, quantity: "100 мл" }, // Пина Колада - Сок ананасовый
        { recipeId: 15, ingredientTypeId: 82, quantity: "полный блендер" }, // Пина Колада - Лед
        { recipeId: 15, ingredientTypeId: 69, quantity: "1 шт" }, // Пина Колада - Мараскиновая вишня

        { recipeId: 16, ingredientTypeId: 5, quantity: "15 мл" }, // Лонг Айленд Айс Ти - Водка
        { recipeId: 16, ingredientTypeId: 4, quantity: "15 мл" }, // Лонг Айленд Айс Ти - Джин
        { recipeId: 16, ingredientTypeId: 2, quantity: "15 мл" }, // Лонг Айленд Айс Ти - Ром (светлый)
        { recipeId: 16, ingredientTypeId: 6, quantity: "15 мл" }, // Лонг Айленд Айс Ти - Текила (бланко)
        { recipeId: 16, ingredientTypeId: 12, quantity: "15 мл" }, // Лонг Айленд Айс Ти - Трипл сек
        { recipeId: 16, ingredientTypeId: 37, quantity: "25 мл" }, // Лонг Айленд Айс Ти - Сок лимонный
        { recipeId: 16, ingredientTypeId: 45, quantity: "до верха" }, // Лонг Айленд Айс Ти - Кола
        { recipeId: 16, ingredientTypeId: 82, quantity: "полный бокал" }, // Лонг Айленд Айс Ти - Лед

        { recipeId: 17, ingredientTypeId: 5, quantity: "50 мл" }, // Кровавая Мери - Водка
        { recipeId: 17, ingredientTypeId: 83, quantity: "120 мл" }, // Кровавая Мери - Сок томатный
        { recipeId: 17, ingredientTypeId: 64, quantity: "2 дэша" }, // Кровавая Мери - Соус Ворчестер
        { recipeId: 17, ingredientTypeId: 65, quantity: "2 дэша" }, // Кровавая Мери - Табаско
        { recipeId: 17, ingredientTypeId: 66, quantity: "по вкусу" }, // Кровавая Мери - Соль
        { recipeId: 17, ingredientTypeId: 67, quantity: "по вкусу" }, // Кровавая Мери - Перец
        { recipeId: 17, ingredientTypeId: 82, quantity: "полный бокал" }, // Кровавая Мери - Лед

        { recipeId: 18, ingredientTypeId: 4, quantity: "30 мл" }, // Френч 75 - Джин
        { recipeId: 18, ingredientTypeId: 37, quantity: "15 мл" }, // Френч 75 - Сок лимонный
        { recipeId: 18, ingredientTypeId: 53, quantity: "10 мл" }, // Френч 75 - Сироп сахарный
        { recipeId: 18, ingredientTypeId: 20, quantity: "до верха" }, // Френч 75 - Игристое вино
        { recipeId: 18, ingredientTypeId: 82, quantity: "полный шейкер" }, // Френч 75 - Лед

        { recipeId: 19, ingredientTypeId: 2, quantity: "50 мл" }, // Кайпиринья - Ром (светлый)
        { recipeId: 19, ingredientTypeId: 38, quantity: "1 лайм" }, // Кайпиринья - Сок лайма
        { recipeId: 19, ingredientTypeId: 53, quantity: "2 ч.л." }, // Кайпиринья - Сироп сахарный
        { recipeId: 19, ingredientTypeId: 82, quantity: "полный бокал" }, // Кайпиринья - Лед

        { recipeId: 20, ingredientTypeId: 2, quantity: "30 мл" }, // Май Тай - Ром (светлый)
        { recipeId: 20, ingredientTypeId: 3, quantity: "30 мл" }, // Май Тай - Ром (темный)
        { recipeId: 20, ingredientTypeId: 11, quantity: "15 мл" }, // Май Тай - Куантро
        { recipeId: 20, ingredientTypeId: 10, quantity: "15 мл" }, // Май Тай - Амаретто
        { recipeId: 20, ingredientTypeId: 38, quantity: "30 мл" }, // Май Тай - Сок лайма
        { recipeId: 20, ingredientTypeId: 82, quantity: "полный бокал" }, // Май Тай - Лед

        { recipeId: 21, ingredientTypeId: 5, quantity: "40 мл" }, // Секс на пляже - Водка
        { recipeId: 21, ingredientTypeId: 25, quantity: "20 мл" }, // Секс на пляже - Персиковый ликер
        { recipeId: 21, ingredientTypeId: 36, quantity: "40 мл" }, // Секс на пляже - Сок клюквенный
        { recipeId: 21, ingredientTypeId: 35, quantity: "40 мл" }, // Секс на пляже - Сок ананасовый
        { recipeId: 21, ingredientTypeId: 82, quantity: "полный бокал" }, // Секс на пляже - Лед

        { recipeId: 22, ingredientTypeId: 5, quantity: "50 мл" }, // Голубая лагуна - Водка
        { recipeId: 22, ingredientTypeId: 2, quantity: "20 мл" }, // Голубая лагуна - Ром (светлый)
        { recipeId: 22, ingredientTypeId: 48, quantity: "до верха" }, // Голубая лагуна - Лимонад
        { recipeId: 22, ingredientTypeId: 82, quantity: "полный бокал" }, // Голубая лагуна - Лед

        { recipeId: 23, ingredientTypeId: 2, quantity: "15 мл" }, // Кир Рояль - Ром (светлый)
        { recipeId: 23, ingredientTypeId: 20, quantity: "до верха" }, // Кир Рояль - Игристое вино

        { recipeId: 24, ingredientTypeId: 4, quantity: "50 мл" }, // Джин Тоник - Джин
        { recipeId: 24, ingredientTypeId: 43, quantity: "до верха" }, // Джин Тоник - Тоник
        { recipeId: 24, ingredientTypeId: 77, quantity: "1 долька" }, // Джин Тоник - Лайм (долька)
        { recipeId: 24, ingredientTypeId: 82, quantity: "полный бокал" }, // Джин Тоник - Лед

        { recipeId: 25, ingredientTypeId: 5, quantity: "60 мл" }, // Московский мул - Водка
        { recipeId: 25, ingredientTypeId: 49, quantity: "до верха" }, // Московский мул - Имбирное пиво
        { recipeId: 25, ingredientTypeId: 38, quantity: "10 мл" }, // Московский мул - Сок лайма
        { recipeId: 25, ingredientTypeId: 82, quantity: "полная кружка" }, // Московский мул - Лед

        { recipeId: 26, ingredientTypeId: 6, quantity: "50 мл" }, // Палома - Текила (бланко)
        { recipeId: 26, ingredientTypeId: 39, quantity: "до верха" }, // Палома - Сок грейпфрутовый
        { recipeId: 26, ingredientTypeId: 38, quantity: "10 мл" }, // Палома - Сок лайма
        { recipeId: 26, ingredientTypeId: 82, quantity: "полный бокал" }, // Палома - Лед

        { recipeId: 27, ingredientTypeId: 5, quantity: "50 мл" }, // Эспрессо Мартини - Водка
        { recipeId: 27, ingredientTypeId: 21, quantity: "20 мл" }, // Эспрессо Мартини - Ликер кофейный
        { recipeId: 27, ingredientTypeId: 41, quantity: "1 порция" }, // Эспрессо Мартини - Яблочный сок
        { recipeId: 27, ingredientTypeId: 82, quantity: "полный шейкер" }, // Эспрессо Мартини - Лед

        { recipeId: 28, ingredientTypeId: 2, quantity: "60 мл" }, // Дайкири Фрозет - Ром (светлый)
        { recipeId: 28, ingredientTypeId: 38, quantity: "30 мл" }, // Дайкири Фрозет - Сок лайма
        { recipeId: 28, ingredientTypeId: 53, quantity: "20 мл" }, // Дайкири Фрозет - Сироп сахарный
        { recipeId: 28, ingredientTypeId: 76, quantity: "100 гр" }, // Дайкири Фрозет - Клубника

        { recipeId: 29, ingredientTypeId: 72, quantity: "10 веточек" }, // Клубничный мохито - Мята
        { recipeId: 29, ingredientTypeId: 77, quantity: "1/2 лайма" }, // Клубничный мохито - Лайм (долька)
        { recipeId: 29, ingredientTypeId: 76, quantity: "5 шт" }, // Клубничный мохито - Клубника
        { recipeId: 29, ingredientTypeId: 53, quantity: "20 мл" }, // Клубничный мохито - Сироп сахарный
        { recipeId: 29, ingredientTypeId: 2, quantity: "50 мл" }, // Клубничный мохито - Ром (светлый)
        { recipeId: 29, ingredientTypeId: 44, quantity: "до верха" }, // Клубничный мохито - Содовая

        { recipeId: 30, ingredientTypeId: 6, quantity: "50 мл" }, // Маргарита с манго - Текила (бланко)
        { recipeId: 30, ingredientTypeId: 11, quantity: "20 мл" }, // Маргарита с манго - Куантро
        { recipeId: 30, ingredientTypeId: 38, quantity: "20 мл" }, // Маргарита с манго - Сок лайма
        { recipeId: 30, ingredientTypeId: 57, quantity: "50 гр" }, // Маргарита с манго - Пюре клубники

        { recipeId: 31, ingredientTypeId: 2, quantity: "50 мл" }, // Ром и кока-кола с ванилью - Ром (светлый)
        { recipeId: 31, ingredientTypeId: 45, quantity: "до верха" }, // Ром и кока-кола с ванилью - Кола
        { recipeId: 31, ingredientTypeId: 53, quantity: "20 мл" }, // Ром и кока-кола с ванилью - Сироп сахарный

        { recipeId: 32, ingredientTypeId: 5, quantity: "40 мл" }, // Французский Мартини - Водка
        { recipeId: 32, ingredientTypeId: 23, quantity: "15 мл" }, // Французский Мартини - Вишневый ликер (Kirsch)
        { recipeId: 32, ingredientTypeId: 35, quantity: "60 мл" }, // Французский Мартини - Сок ананасовый

        { recipeId: 33, ingredientTypeId: 4, quantity: "60 мл" }, // Коктейль Джин Рики - Джин
        { recipeId: 33, ingredientTypeId: 44, quantity: "до верха" }, // Коктейль Джин Рики - Содовая
        { recipeId: 33, ingredientTypeId: 38, quantity: "20 мл" }, // Коктейль Джин Рики - Сок лайма

        { recipeId: 34, ingredientTypeId: 1, quantity: "50 мл" }, // Виски с колой и лимоном - Виски
        { recipeId: 34, ingredientTypeId: 45, quantity: "до верха" }, // Виски с колой и лимоном - Кола
        { recipeId: 34, ingredientTypeId: 37, quantity: "15 мл" }, // Виски с колой и лимоном - Сок лимонный

        { recipeId: 35, ingredientTypeId: 1, quantity: "50 мл" }, // Горячий Тодди - Виски
        { recipeId: 35, ingredientTypeId: 59, quantity: "2 ч.л." }, // Горячий Тодди - Мед
        { recipeId: 35, ingredientTypeId: 37, quantity: "10 мл" }, // Горячий Тодди - Сок лимонный

        { recipeId: 36, ingredientTypeId: 2, quantity: "50 мл" }, // Грог - Ром (светлый)
        { recipeId: 36, ingredientTypeId: 59, quantity: "2 ч.л." }, // Грог - Мед
        { recipeId: 36, ingredientTypeId: 37, quantity: "10 мл" }, // Грог - Сок лимонный

        { recipeId: 37, ingredientTypeId: 5, quantity: "50 мл" }, // Чай с водкой и лимоном - Водка
        { recipeId: 37, ingredientTypeId: 37, quantity: "10 мл" }, // Чай с водкой и лимоном - Сок лимонный
        { recipeId: 37, ingredientTypeId: 41, quantity: "150 мл" }, // Чай с водкой и лимоном - Яблочный сок

        { recipeId: 38, ingredientTypeId: 2, quantity: "50 мл" }, // Ром с энергетиком - Ром (светлый)
        { recipeId: 38, ingredientTypeId: 50, quantity: "150 мл" }, // Ром с энергетиком - Энергетик (Red Bull)

        { recipeId: 39, ingredientTypeId: 5, quantity: "50 мл" }, // Водка с энергетиком и апельсиновым соком - Водка
        { recipeId: 39, ingredientTypeId: 50, quantity: "75 мл" }, // Водка с энергетиком и апельсиновым соком - Энергетик (Red Bull)
        { recipeId: 39, ingredientTypeId: 34, quantity: "75 мл" }, // Водка с энергетиком и апельсиновым соком - Сок апельсиновый

        { recipeId: 40, ingredientTypeId: 4, quantity: "50 мл" }, // Джин с тоником и огурцом - Джин
        { recipeId: 40, ingredientTypeId: 43, quantity: "150 мл" }, // Джин с тоником и огурцом - Тоник
        { recipeId: 40, ingredientTypeId: 75, quantity: "2 ломтика" }, // Джин с тоником и огурцом - Огурец

        { recipeId: 41, ingredientTypeId: 2, quantity: "50 мл" }, // Клюквенный морс с ромом - Ром (светлый)
        { recipeId: 41, ingredientTypeId: 36, quantity: "150 мл" }, // Клюквенный морс с ромом - Сок клюквенный

        { recipeId: 42, ingredientTypeId: 1, quantity: "150 мл" }, // Кофе с ликером Бейлиз - Виски
        { recipeId: 42, ingredientTypeId: 22, quantity: "30 мл" }, // Кофе с ликером Бейлиз - Ликер сливочный

        { recipeId: 43, ingredientTypeId: 6, quantity: "50 мл" }, // Текила бум - Текила (бланко)
        { recipeId: 43, ingredientTypeId: 44, quantity: "до верха" }, // Текила бум - Содовая

        { recipeId: 44, ingredientTypeId: 21, quantity: "1/3" }, // Слоистый шоты B-52 - Ликер кофейный
        { recipeId: 44, ingredientTypeId: 22, quantity: "1/3" }, // Слоистый шоты B-52 - Ликер сливочный
        { recipeId: 44, ingredientTypeId: 34, quantity: "1/3" }, // Слоистый шоты B-52 - Сок апельсиновый

        { recipeId: 45, ingredientTypeId: 79, quantity: "25 мл" }, // Шот Хиросима - Самбука
        { recipeId: 45, ingredientTypeId: 80, quantity: "15 мл" }, // Шот Хиросима - Irish cream
        { recipeId: 45, ingredientTypeId: 54, quantity: "5 мл" }, // Шот Хиросима - Сироп гренадин

        { recipeId: 46, ingredientTypeId: 5, quantity: "50 мл" }, // Водка с томатным соком и табаско - Водка
        { recipeId: 46, ingredientTypeId: 35, quantity: "150 мл" }, // Водка с томатным соком и табаско - Сок ананасовый
        { recipeId: 46, ingredientTypeId: 65, quantity: "2 дэша" }, // Водка с томатным соком и табаско - Табаско

        { recipeId: 47, ingredientTypeId: 5, quantity: "50 мл" }, // Водка с клюквенным соком и лаймом - Водка
        { recipeId: 47, ingredientTypeId: 36, quantity: "150 мл" }, // Водка с клюквенным соком и лаймом - Сок клюквенный
        { recipeId: 47, ingredientTypeId: 38, quantity: "10 мл" }, // Водка с клюквенным соком и лаймом - Сок лайма

        { recipeId: 48, ingredientTypeId: 1, quantity: "50 мл" }, // Виски с яблочным соком и корицей - Виски
        { recipeId: 48, ingredientTypeId: 41, quantity: "150 мл" }, // Виски с яблочным соком и корицей - Яблочный сок
        { recipeId: 48, ingredientTypeId: 78, quantity: "по вкусу" }, // Виски с яблочным соком и корицей - Корица

        { recipeId: 49, ingredientTypeId: 4, quantity: "50 мл" }, // Джин с ананасовым соком и кокосовым сиропом - Джин
        { recipeId: 49, ingredientTypeId: 35, quantity: "100 мл" }, // Джин с ананасовым соком и кокосовым сиропом - Сок ананасовый
        { recipeId: 49, ingredientTypeId: 56, quantity: "30 мл" }, // Джин с ананасовым соком и кокосовым сиропом - Сироп кокосовый

        { recipeId: 50, ingredientTypeId: 2, quantity: "50 мл" }, // Ром с соком манго и лаймом - Ром (светлый)
        { recipeId: 50, ingredientTypeId: 35, quantity: "100 мл" }, // Ром с соком манго и лаймом - Сок ананасовый
        { recipeId: 50, ingredientTypeId: 38, quantity: "10 мл" }, // Ром с соком манго и лаймом - Сок лайма

        { recipeId: 51, ingredientTypeId: 32, quantity: "40 мл" }, // Jagerbomb - Ягермейстер
        { recipeId: 51, ingredientTypeId: 50, quantity: "150 мл" }, // Jagerbomb - Энергетик (Red Bull)
        {
          recipeId: 51,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Jagerbomb - Лед

        { recipeId: 52, ingredientTypeId: 33, quantity: "50 мл" }, // The Herbalist - Бехеровка
        { recipeId: 52, ingredientTypeId: 37, quantity: "25 мл" }, // The Herbalist - Сок лимонный
        { recipeId: 52, ingredientTypeId: 53, quantity: "15 мл" }, // The Herbalist - Сироп сахарный
        { recipeId: 52, ingredientTypeId: 71, quantity: "цедра" }, // The Herbalist - Цедра апельсина
        {
          recipeId: 52,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // The Herbalist - Лед

        { recipeId: 53, ingredientTypeId: 32, quantity: "40 мл" }, // Jager Mule - Ягермейстер
        { recipeId: 53, ingredientTypeId: 38, quantity: "20 мл" }, // Jager Mule - Сок лайма
        { recipeId: 53, ingredientTypeId: 49, quantity: "150 мл" }, // Jager Mule - Имбирное пиво
        { recipeId: 53, ingredientTypeId: 77, quantity: "долька" }, // Jager Mule - Лайм (долька)
        { recipeId: 53, ingredientTypeId: 82, quantity: "полная кружка" }, // Jager Mule - Лед

        { recipeId: 54, ingredientTypeId: 33, quantity: "50 мл" }, // Becherovka Sour - Бехеровка
        { recipeId: 54, ingredientTypeId: 37, quantity: "25 мл" }, // Becherovka Sour - Сок лимонный
        { recipeId: 54, ingredientTypeId: 53, quantity: "20 мл" }, // Becherovka Sour - Сироп сахарный
        { recipeId: 54, ingredientTypeId: 61, quantity: "20 мл" }, // Becherovka Sour - Яичный белок
        { recipeId: 54, ingredientTypeId: 71, quantity: "цедра" }, // Becherovka Sour - Цедра апельсина
        {
          recipeId: 54,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Becherovka Sour - Лед

        { recipeId: 55, ingredientTypeId: 32, quantity: "50 мл" }, // Jager Old Fashioned - Ягермейстер
        { recipeId: 55, ingredientTypeId: 66, quantity: "1 ч.л." }, // Jager Old Fashioned - Соль
        { recipeId: 55, ingredientTypeId: 28, quantity: "2 дэша" }, // Jager Old Fashioned - Биттер Ангостура
        {
          recipeId: 55,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Jager Old Fashioned - Лед

        { recipeId: 56, ingredientTypeId: 33, quantity: "30 мл" }, // Bohemian - Бехеровка
        { recipeId: 56, ingredientTypeId: 4, quantity: "30 мл" }, // Bohemian - Джин
        { recipeId: 56, ingredientTypeId: 28, quantity: "2 дэша" }, // Bohemian - Биттер Ангостура
        {
          recipeId: 56,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Bohemian - Лед

        { recipeId: 57, ingredientTypeId: 32, quantity: "45 мл" }, // Jagerita - Ягермейстер
        { recipeId: 57, ingredientTypeId: 6, quantity: "30 мл" }, // Jagerita - Текила (бланко)
        { recipeId: 57, ingredientTypeId: 38, quantity: "30 мл" }, // Jagerita - Сок лайма
        {
          recipeId: 57,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Jagerita - Лед
        { recipeId: 57, ingredientTypeId: 66, quantity: "по вкусу" }, // Jagerita - Соль

        { recipeId: 58, ingredientTypeId: 33, quantity: "50 мл" }, // Becherovka & Tonic - Бехеровка
        { recipeId: 58, ingredientTypeId: 43, quantity: "до верха" }, // Becherovka & Tonic - Тоник
        { recipeId: 58, ingredientTypeId: 71, quantity: "цедра" }, // Becherovka & Tonic - Цедра апельсина
        { recipeId: 58, ingredientTypeId: 82, quantity: "полный бокал" }, // Becherovka & Tonic - Лед

        { recipeId: 59, ingredientTypeId: 32, quantity: "40 мл" }, // Jager Red Bull - Ягермейстер
        { recipeId: 59, ingredientTypeId: 50, quantity: "150 мл" }, // Jager Red Bull - Энергетик (Red Bull)
        {
          recipeId: 59,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Jager Red Bull - Лед

        { recipeId: 60, ingredientTypeId: 33, quantity: "50 мл" }, // The Czech Mule - Бехеровка
        { recipeId: 60, ingredientTypeId: 38, quantity: "20 мл" }, // The Czech Mule - Сок лайма
        { recipeId: 60, ingredientTypeId: 49, quantity: "150 мл" }, // The Czech Mule - Имбирное пиво
        { recipeId: 60, ingredientTypeId: 77, quantity: "долька" }, // The Czech Mule - Лайм (долька)
        { recipeId: 60, ingredientTypeId: 82, quantity: "полная кружка" }, // The Czech Mule - Лед

        { recipeId: 61, ingredientTypeId: 4, quantity: "30 мл" }, // Gin & Becherovka - Джин
        { recipeId: 61, ingredientTypeId: 33, quantity: "30 мл" }, // Gin & Becherovka - Бехеровка
        { recipeId: 61, ingredientTypeId: 37, quantity: "20 мл" }, // Gin & Becherovka - Сок лимонный
        { recipeId: 61, ingredientTypeId: 53, quantity: "10 мл" }, // Gin & Becherovka - Сироп сахарный
        {
          recipeId: 61,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Gin & Becherovka - Лед

        { recipeId: 62, ingredientTypeId: 32, quantity: "50 мл" }, // Jager Apple - Ягермейстер
        { recipeId: 62, ingredientTypeId: 41, quantity: "150 мл" }, // Jager Apple - Яблочный сок
        {
          recipeId: 62,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Jager Apple - Лед

        { recipeId: 63, ingredientTypeId: 4, quantity: "60 мл" }, // Bee's Knees - Джин
        { recipeId: 63, ingredientTypeId: 37, quantity: "20 мл" }, // Bee's Knees - Сок лимонный
        { recipeId: 63, ingredientTypeId: 59, quantity: "20 мл" }, // Bee's Knees - Мед

        { recipeId: 64, ingredientTypeId: 4, quantity: "40 мл" }, // White Lady - Джин
        { recipeId: 64, ingredientTypeId: 11, quantity: "20 мл" }, // White Lady - Куантро
        { recipeId: 64, ingredientTypeId: 37, quantity: "20 мл" }, // White Lady - Сок лимонный
        { recipeId: 64, ingredientTypeId: 61, quantity: "1 белок" }, // White Lady - Яичный белок

        { recipeId: 65, ingredientTypeId: 8, quantity: "50 мл" }, // Sidecar - Бренди
        { recipeId: 65, ingredientTypeId: 11, quantity: "20 мл" }, // Sidecar - Куантро
        { recipeId: 65, ingredientTypeId: 37, quantity: "20 мл" }, // Sidecar - Сок лимонный

        { recipeId: 66, ingredientTypeId: 1, quantity: "30 мл" }, // Vieux Carre - Виски
        { recipeId: 66, ingredientTypeId: 9, quantity: "30 мл" }, // Vieux Carre - Коньяк
        { recipeId: 66, ingredientTypeId: 16, quantity: "30 мл" }, // Vieux Carre - Вермут (сладкий)
        { recipeId: 66, ingredientTypeId: 81, quantity: "2 дэша" }, // Vieux Carre - Бенедиктин
        { recipeId: 66, ingredientTypeId: 28, quantity: "1 дэш" }, // Vieux Carre - Биттер Ангостура

        { recipeId: 67, ingredientTypeId: 1, quantity: "60 мл" }, // Sazerac - Виски
        { recipeId: 67, ingredientTypeId: 66, quantity: "1 ч.л." }, // Sazerac - Соль
        { recipeId: 67, ingredientTypeId: 28, quantity: "2 дэша" }, // Sazerac - Биттер Ангостура
        {
          recipeId: 67,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Sazerac - Лед

        { recipeId: 68, ingredientTypeId: 1, quantity: "40 мл" }, // Boulevardier - Виски
        { recipeId: 68, ingredientTypeId: 16, quantity: "30 мл" }, // Boulevardier - Вермут (сладкий)
        { recipeId: 68, ingredientTypeId: 14, quantity: "30 мл" }, // Boulevardier - Кампари

        { recipeId: 69, ingredientTypeId: 5, quantity: "45 мл" }, // French Martini - Водка
        { recipeId: 69, ingredientTypeId: 23, quantity: "15 мл" }, // French Martini - Вишневый ликер (Kirsch)
        { recipeId: 69, ingredientTypeId: 35, quantity: "30 мл" }, // French Martini - Сок ананасовый

        { recipeId: 70, ingredientTypeId: 5, quantity: "50 мл" }, // Espresso Martini - Водка
        { recipeId: 70, ingredientTypeId: 21, quantity: "20 мл" }, // Espresso Martini - Ликер кофейный
        { recipeId: 70, ingredientTypeId: 41, quantity: "1 порция" }, // Espresso Martini - Яблочный сок
        {
          recipeId: 70,
          ingredientTypeId: 82,
          quantity: "достаточно для смешивания",
        }, // Espresso Martini - Лед
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("RecComponents", null, {});
  },
};
