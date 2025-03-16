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
          discription:
            "В бокал положите мяту и лайм. Добавьте сахарный сироп. Разомните. Наполните бокал льдом. Влейте ром и содовую. Перемешайте.",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Куба Либре",
          text: "Простой и популярный коктейль с ромом и колой.",
          img: "https://i.pinimg.com/736x/57/43/1f/57431f46ccf8073cfdd5ad6b1edf1e78.jpg",
          discription:
            "Наполните стакан льдом. Влейте ром и колу. Добавьте дольку лайма.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Дайкири",
          text: "Классический кислый коктейль с ромом, лаймом и сахаром.",
          img: "https://i.pinimg.com/736x/78/00/d0/7800d02d810e5cebe508c4494f458b37.jpg",
          discription:
            "Смешайте ром, сок лайма и сахарный сироп в шейкере со льдом. Взбейте и перелейте в охлажденный бокал.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Виски Сауэр",
          text: "Классический коктейль с виски, лимоном и сахаром.",
          img: "https://avatars.yandex.net/get-music-content/9707577/72ef25cc.a.26193166-1/m1000x1000?webp=false",
          discription:
            "Смешайте виски, сок лимона и сахарный сироп в шейкере со льдом. Взбейте и перелейте в бокал со льдом. Добавьте вишню для украшения.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Маргарита",
          text: "Популярный коктейль с текилой, лаймом и куантро.",
          img: "https://static.tildacdn.com/tild6132-6363-4233-b339-383563326232/photo.jpg",
          discription:
            "Натрите край бокала солью. Смешайте текилу, куантро и сок лайма в шейкере со льдом. Взбейте и перелейте в бокал.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Текила Санрайз",
          text: "Красивый коктейль с текилой, апельсиновым соком и гренадином.",
          img: "https://i.pinimg.com/736x/60/11/75/6011758d6e8c83bfb11d927e5ca440a3.jpg",
          discription:
            "Наполните стакан льдом. Влейте текилу и апельсиновый сок. Добавьте гренадин, чтобы он опустился на дно.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Отвертка",
          text: "Простой коктейль с водкой и апельсиновым соком.",
          img: "https://i.pinimg.com/originals/2e/4a/63/2e4a632e4e49ddd77455d97e240e199b.jpg",
          discription:
            "Наполните стакан льдом. Влейте водку и апельсиновый сок. Перемешайте.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Космополитен",
          text: "Гламурный коктейль с водкой, куантро, клюквенным и лаймовым соком.",
          img: "https://i.pinimg.com/736x/7a/76/22/7a7622802442dc0592c39878c98a5839.jpg",
          discription:
            "Смешайте водку, куантро, клюквенный и лаймовый сок в шейкере со льдом. Взбейте и перелейте в охлажденный бокал.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Белый русский",
          text: "Сливочный коктейль с водкой, кофейным ликером и сливками.",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_663f56cac9f50662e35b3fa5_663f57021d849c75f26068dc/scale_1200",
          discription:
            "Наполните стакан льдом. Влейте водку и кофейный ликер. Добавьте сливки.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Черный русский",
          text: "Крепкий коктейль с водкой и кофейным ликером.",
          img: "https://masterpiecer-images.s3.yandex.net/fd4a9d6a954611eeb256ea706a577e15:upscaled",
          discription: "Наполните стакан льдом. Влейте водку и кофейный ликер.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        {
          title: "Манхэттен",
          text: "Классический коктейль с виски, вермутом и биттером.",
          img: "https://drinkoteket.se/wp-content/uploads/manhattan-1.jpg",
          discription:
            "Смешайте виски, сладкий вермут и ангостуру в стакане со льдом. Перемешайте и перелейте в охлажденный бокал. Добавьте вишню для украшения.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        {
          title: "Негрони",
          text: "Крепкий коктейль с джином, кампари и вермутом.",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/1626348/pub_5c8918475944f400b3daea7a_5c893c617951ff00b405aa03/scale_1200",
          discription:
            "Смешайте джин, кампари и сладкий вермут в стакане со льдом. Перемешайте и украсьте апельсиновой цедрой.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        {
          title: "Мартини",
          text: "Классический коктейль с джином и сухим вермутом.",
          img: "https://i.pinimg.com/736x/34/70/80/347080b7a1c3072d6d7d73c917f7dcca.jpg",
          discription:
            "Смешайте джин и сухой вермут в стакане со льдом. Перемешайте и перелейте в охлажденный бокал. Добавьте оливку.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        {
          title: "Апероль Шприц",
          text: "Легкий и освежающий коктейль с аперолем, игристым вином и содовой.",
          img: "https://ir.ozone.ru/s3/multimedia-p/6755226865.jpg",
          discription:
            "Наполните бокал льдом. Влейте апероль, добавьте игристое вино и немного содовой.",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Пина Колада",
          text: "Тропический коктейль с ромом, кокосовым молоком и ананасовым соком.",
          img: "https://i.pinimg.com/originals/18/fa/29/18fa29ac92cbbce1abb97cec321a760d.jpg",
          discription:
            "Смешайте ром, кокосовое молоко и ананасовый сок в блендере со льдом. Взбейте и перелейте в бокал. Украсьте долькой ананаса и вишней.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Лонг Айленд Айс Ти",
          text: "Коктейль, содержащий много алкоголя и напоминающий чай.",
          img: "https://i.pinimg.com/736x/15/df/3d/15df3d14c4f674d012fef13c7627d027.jpg",
          discription:
            "Смешайте водку, джин, ром, текилу, трипл сек, лимонный сок и колу в стакане со льдом.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        {
          title: "Кровавая Мери",
          text: "Острый коктейль с водкой, томатным соком и специями.",
          img: "https://avatars.mds.yandex.net/i?id=09a9a7374d98b9c3bfff0a910f4f643b_l-5221567-images-thumbs&n=13",
          discription:
            "Смешайте водку, томатный сок, соус Ворчестер, табаско, соль и перец в стакане со льдом. Украсьте сельдереем и долькой лимона.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Френч 75",
          text: "Игристый коктейль с джином, лимонным соком и сахарным сиропом.",
          img: "https://avatars.mds.yandex.net/i?id=d244413f9799a7f0653e81875cc06ef47e92876f-4867051-images-thumbs&n=13",
          discription:
            "Смешайте джин, лимонный сок и сахарный сироп в шейкере со льдом. Перелейте в бокал для шампанского и долейте игристым вином.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Кайпиринья",
          text: "Бразильский коктейль с кашасой, лаймом и сахаром.",
          img: "https://avatars.mds.yandex.net/i?id=986fe050d69eb3cc30734416f171db0f_l-5341226-images-thumbs&n=13",
          discription:
            "Раздавите лайм с сахаром в стакане. Наполните стакан льдом и влейте кашасу.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Май Тай",
          text: "Тропический коктейль с ромом, куантро, амаретто и соком лайма.",
          img: "https://static.tildacdn.com/tild3136-3632-4439-b761-333135653935/_.jpg",
          discription:
            "Смешайте светлый и темный ром, куантро, амаретто и сок лайма в шейкере со льдом. Перелейте в бокал со льдом и украсьте ананасом и вишней.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Секс на пляже",
          text: "Сладкий и фруктовый коктейль с водкой, персиковым ликером, клюквенным и ананасовым соком.",
          img: "https://avatars.mds.yandex.net/i?id=47c6f54e009cc515c79d821fa826c2a900c48b7a-8407394-images-thumbs&n=13",
          discription:
            "Смешайте водку, персиковый ликер, клюквенный и ананасовый сок в стакане со льдом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Голубая лагуна",
          text: "Яркий коктейль с водкой, блю курасао и лимонадом.",
          img: "https://i.pinimg.com/736x/97/23/21/972321c43db763cbc00003030d57feaa.jpg",
          discription:
            "Смешайте водку, блю курасао и лимонад в стакане со льдом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Кир Рояль",
          text: "Простой и элегантный коктейль с кремом де кассис и шампанским.",
          img: "https://avatars.mds.yandex.net/get-altay/9829646/2a0000019118e5dcec96f5f3d23b7b2fb952/XXXL",
          discription:
            "Влейте крем де кассис в бокал для шампанского и долейте шампанским.",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Джин Тоник",
          text: "Классический и освежающий коктейль с джином и тоником.",
          img: "https://i.pinimg.com/736x/93/df/d5/93dfd579d3500f399c72e768afc4e2d5.jpg",
          discription:
            "Наполните стакан льдом, влейте джин и долейте тоником. Украсьте долькой лайма.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Московский мул",
          text: "Коктейль с водкой, имбирным пивом и лаймом, подаваемый в медной кружке.",
          img: "https://masterpiecer-images.s3.yandex.net/15498f22860a11eea1e3aaafe6635749:upscaled",
          discription:
            "Наполните кружку льдом, влейте водку и сок лайма, долейте имбирным пивом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Палома",
          text: "Освежающий коктейль с текилой, грейпфрутовой содовой и лаймом.",
          img: "https://i.pinimg.com/736x/be/4f/d1/be4fd14a9d101304e7b0443c073f97a3.jpg",
          discription:
            "Наполните стакан льдом, влейте текилу и сок лайма, долейте грейпфрутовой содовой.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Эспрессо Мартини",
          text: "Бодрящий коктейль с водкой, кофейным ликером и эспрессо.",
          img: "https://avatars.dzeninfra.ru/get-zen_doc/5300260/pub_638e0773ee1bc829b5e9371a_638e0791ee1bc829b5e93dd0/scale_1200",
          discription:
            "Смешайте водку, кофейный ликер и эспрессо в шейкере со льдом. Взбейте и перелейте в охлажденный бокал.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Дайкири Фрозет",
          text: "Летний вариант Дайкири с замороженными фруктами.",
          img: "https://avatars.mds.yandex.net/i?id=ac8f31b662eed38cc922b8efbb3f3082_l-5384958-images-thumbs&n=13",
          discription:
            "В блендере смешайте ром, сок лайма, замороженные фрукты и сахарный сироп.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Клубничный мохито",
          text: "Вариация мохито с клубникой для добавления сладости и аромата.",
          img: "https://static.tildacdn.com/stor6338-3964-4238-b937-373031633738/81862606.png",
          discription:
            "В бокале смешайте мяту, лайм, клубнику и сахарный сироп. Разомните, добавьте лед, ром и содовую.",
          strengthLevel: "слабый",
          isShot: false,
        },
        {
          title: "Маргарита с манго",
          text: "Тропический вариант маргариты с пюре манго.",
          img: "",
          discription:
            "Смешайте текилу, куантро, сок лайма и пюре манго в шейкере со льдом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Ром и кока-кола с ванилью",
          text: "Простой коктейль с добавлением ванильного сиропа.",
          img: "",
          discription:
            "Наполните стакан льдом, влейте ром, ванильный сироп и колу.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Французский Мартини",
          text: "Коктейль с водкой, ликером Chambord и ананасовым соком.",
          img: "",
          discription:
            "Смешайте водку, ликер Chambord и ананасовый сок в шейкере со льдом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Коктейль Джин Рики",
          text: "Коктейль джин, содовая и лайм",
          img: "",
          discription: "Смешайте джин и сок лайма,  долейте газированной водой",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Виски с колой и лимоном",
          text: "Простой коктейль с виски, колой и лимоном",
          img: "",
          discription:
            "Смешайте виски, колу и лимонный сок в стакане со льдом.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Горячий Тодди",
          text: "Горячий коктейль с виски, медом и лимоном",
          img: "",
          discription:
            "Смешайте виски, мед и лимонный сок в кружке, добавьте горячую воду.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Грог",
          text: "Простой коктейль с ромом, медом и лимоном",
          img: "",
          discription:
            "Смешайте ром, мед и лимонный сок в кружке, добавьте горячую воду.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Чай с водкой и лимоном",
          text: "Чай с водкой и лимоном",
          img: "",
          discription: "Добавьте в чай водку и лимон.",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Ром с энергетиком",
          text: "Ром с энергетиком",
          img: "",
          discription: "Смешайте ром и энергетик",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Водка с энергетиком и апельсиновым соком",
          text: "Водка с энергетиком и апельсиновым соком",
          img: "",
          discription: "Смешайте водку ,энергетик и апельсиновый сок",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Джин с тоником и огурцом",
          text: "Джин с тоником и огурцом",
          img: "",
          discription: "Смешайте Джин с тоником и добавьте огурец",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Клюквенный морс с ромом",
          text: "Клюквенный морс с ромом",
          img: "",
          discription: "Смешайте клюквенный морс и ром",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Кофе с ликером Бейлиз",
          text: "Кофе с ликером Бейлиз",
          img: "",
          discription: "Добавьте в кофе ликер Бейлиз",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Текила бум",
          text: "Текила с газировкой",
          img: "",
          discription: "Смешайте текилу с газировкой",
          strengthLevel: "средний",
          isShot: true,
        },
        {
          title: "Слоистый шоты B-52",
          text: "Слоистый шоты B-52",
          img: "",
          discription: "Налейте кофейный ликер, затем сливочный и апельсиновый",
          strengthLevel: "средний",
          isShot: true,
        },
        {
          title: "Шот Хиросима",
          text: "Шот Хиросима",
          img: "",
          discription: "Налейте самбуку ,аирш крим и гренадин",
          strengthLevel: "средний",
          isShot: true,
        },
        {
          title: "Водка с томатным соком и табаско",
          text: "Водка с томатным соком и табаско",
          img: "",
          discription: "Смешайте водку с томатным соком и табаско",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Водка с клюквенным соком и лаймом",
          text: "Водка с клюквенным соком и лаймом",
          img: "",
          discription: "Смешайте водку, клюквенный сок и лайм",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Виски с яблочным соком и корицей",
          text: "Виски с яблочным соком и корицей",
          img: "",
          discription: "Смешайте виски , яблочный сок и корицу",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Джин с ананасовым соком и кокосовым сиропом",
          text: "Джин с ананасовым соком и кокосовым сиропом",
          img: "",
          discription: "Смешайте джин, ананасовый сок и кокосовый сироп",
          strengthLevel: "средний",
          isShot: false,
        },
        {
          title: "Ром с соком манго и лаймом",
          text: "Ром с соком манго и лаймом",
          img: "",
          discription: "Смешайте ром , сок манго и лайм",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 51: Jagerbomb (Shot)
        {
          title: "Jagerbomb",
          text: "Популярный шот с Ягермейстером и энергетиком.",
          img: "",
          discription:
            "В бокал налейте энергетик. В отдельный стаканчик налейте Ягермейстер. Опустите стаканчик с Ягермейстером в бокал с энергетиком и выпейте.",
          strengthLevel: "крепкий",
          isShot: true,
        },
        // Рецепт 52: The Herbalist
        {
          title: "The Herbalist",
          text: "Коктейль с Бехеровкой и лимонным соком.",
          img: "",
          discription:
            "Смешайте Бехеровку, лимонный сок и сахарный сироп в шейкере со льдом. Взбейте и процедите в охлажденный бокал. Украсьте цедрой лимона.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 53: Jager Mule
        {
          title: "Jager Mule",
          text: "Версия Moscow Mule с Ягермейстером.",
          img: "",
          discription:
            "В медную кружку положите лед. Добавьте Ягермейстер и сок лайма. Долейте имбирным пивом. Украсьте долькой лайма.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 54: Becherovka Sour
        {
          title: "Becherovka Sour",
          text: "Коктейль с Бехеровкой, лимонным соком и яичным белком.",
          img: "",
          discription:
            "Смешайте Бехеровку, лимонный сок, сахарный сироп и яичный белок в шейкере без льда (dry shake). Взбейте со льдом и процедите в бокал. Украсьте цедрой лимона.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 55: Jager Old Fashioned
        {
          title: "Jager Old Fashioned",
          text: "Классический Old Fashioned с Ягермейстером.",
          img: "",
          discription:
            "В стакане Old Fashioned смешайте сахар, биттер и немного воды. Добавьте Ягермейстер и лед. Перемешайте.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        // Рецепт 56: Bohemian
        {
          title: "Bohemian",
          text: "Коктейль с Бехеровкой, джином и биттером.",
          img: "",
          discription:
            "Смешайте Бехеровку, джин и биттер в стакане со льдом. Перемешайте и процедите в охлажденный бокал.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        // Рецепт 57: Jagerita
        {
          title: "Jagerita",
          text: "Маргарита с Ягермейстером.",
          img: "",
          discription:
            "В шейкере смешайте Ягермейстер, текилу и сок лайма. Взбейте со льдом и процедите в бокал с соленой кромкой.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 58: Becherovka & Tonic
        {
          title: "Becherovka & Tonic",
          text: "Простой освежающий коктейль с Бехеровкой и тоником.",
          img: "",
          discription:
            "Наполните бокал льдом. Влейте Бехеровку и тоник. Перемешайте. Украсьте цедрой лимона.",
          strengthLevel: "слабый",
          isShot: false,
        },
        // Рецепт 59: Jager Red Bull
        {
          title: "Jager Red Bull",
          text: "Еще один шот с Ягермейстером и энергетиком.",
          img: "",
          discription:
            "Смешайте Ягермейстер с Red Bull в шот-бокале и выпейте.",
          strengthLevel: "крепкий",
          isShot: true,
        },
        // Рецепт 60: The Czech Mule
        {
          title: "The Czech Mule",
          text: "Вариант Moscow Mule с Бехеровкой",
          img: "",
          discription:
            "Смешайте Бехеровку и сок лайма в медной кружке. Добавьте лед, долейте имбирным пивом и украсьте.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 61: Gin & Becherovka
        {
          title: "Gin & Becherovka",
          text: "Коктейль из джина и Бехеровки",
          img: "",
          discription:
            "Смешайте джин, бехеровку, лимонный сок и сахарный сироп. Добавьте лед.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 62: Jager Apple
        {
          title: "Jager Apple",
          text: "Коктейль из Ягермейстера и яблочного сока",
          img: "",
          discription: "Смешайте Ягермейстер и яблочный сок. Добавьте лед.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 63: Bee's Knees
        {
          title: "Bee's Knees",
          text: "Коктейль на основе джина",
          img: "",
          discription: "Смешайте джин, лимонный сок и мед.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 64: White Lady
        {
          title: "White Lady",
          text: "Коктейль с джином, куантро и лимонным соком",
          img: "",
          discription: "Смешайте джин, куантро, лимонный сок и яичный белок.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 65: Sidecar
        {
          title: "Sidecar",
          text: "Классический коктейль на основе бренди",
          img: "",
          discription: "Смешайте бренди, куантро и лимонный сок.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 66: Vieux Carre
        {
          title: "Vieux Carre",
          text: "Коктейль на основе виски",
          img: "",
          discription: "Смешайте виски, коньяк, вермут, Бенедиктин и биттер.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        // Рецепт 67: Sazerac
        {
          title: "Sazerac",
          text: "Коктейль на основе виски",
          img: "",
          discription:
            "Смешайте виски, сахар, биттер и немного воды. Добавьте лед.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        // Рецепт 68: Boulevardier
        {
          title: "Boulevardier",
          text: "Коктейль на основе виски",
          img: "",
          discription: "Смешайте виски, сладкий вермут и кампари.",
          strengthLevel: "крепкий",
          isShot: false,
        },
        // Рецепт 69: French Martini
        {
          title: "French Martini",
          text: "Коктейль на основе водки",
          img: "",
          discription: "Смешайте водку, малиновый ликер и ананасовый сок.",
          strengthLevel: "средний",
          isShot: false,
        },
        // Рецепт 70: Espresso Martini
        {
          title: "Espresso Martini",
          text: "Коктейль на основе водки",
          img: "",
          discription: "Смешайте водку, кофейный ликер и эспрессо.",
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
