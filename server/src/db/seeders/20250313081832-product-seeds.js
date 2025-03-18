/* eslint-disable no-unused-vars */
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Создаем продукты
    const products = await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Шейкер",
          image: "https://img.freepik.com/free-photo/flay-lay-cocktail-essentials-with-lime-mint_23-2148454400.jpg?t=st=1741854098~exp=1741857698~hmac=1236251bcbb2cf4a5862963300a5f457adbc478d3a805e9813d2576d1a5d2ecb&w=1060",
          price: 1500.0,
          description:
            "Классический барный шейкер от Culture для приготовления коктейлей. Идеально подходит для смешивания ингредиентов, создания идеальной текстуры и охлаждения напитков. Изготовлен из высококачественной нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "SHK001",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "15x8 см",
          weight: 0.5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Барный стакан для смешивания",
          image: "https://ir.ozone.ru/s3/multimedia-m/c800/6707254630.jpg",
          price: 1200.0,
          description:
            "Прочный стеклянный стакан для смешивания коктейлей от Culture. Идеально подходит для приготовления коктейлей методом размешивания. Изготовлен из ударопрочного стекла, устойчивого к высоким температурам и механическим повреждениям.",
          article: "MIX002",
          brand: "Culture",
          material: "Стекло",
          dimensions: "12x6 см",
          weight: 0.3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мерный стакан",
          image: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/125/162/311/312/512/27/600010066991b1.jpeg",
          price: 800.0,
          description:
            "Мерный стакан Culture – это незаменимый инструмент для точного измерения ингредиентов при приготовлении коктейлей и других напитков. Изготовлен из пищевого пластика, устойчивого к воздействию кислот и щелочей. Имеет удобную шкалу измерений.",
          article: "MEAS003",
          brand: "Culture",
          material: "Пластик",
          dimensions: "10x5 см",
          weight: 0.2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Джиггер",
          image: "https://img.freepik.com/free-photo/preparing-refreshing-cocktail-bar_23-2148176737.jpg?ga=GA1.1.219410496.1740647111&semt=ais_authors_boost",
          price: 500.0,
          description:
            "Двусторонний мерный джиггер Culture для точных измерений. Идеально подходит для профессионального использования в барах и дома. Изготовлен из нержавеющей стали, устойчивой к коррозии и механическим повреждениям.",
          article: "JIG004",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "8x4 см",
          weight: 0.15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Барная ложка",
          image: "https://img.freepik.com/free-photo/top-view-golden-spoons_23-2148816285.jpg?t=st=1741854597~exp=1741858197~hmac=974d4fc36c6f476976a3f6d45566f2dcf8246cee9285040288d9105c59994b0b&w=740",
          price: 400.0,
          description:
            "Удобная барная ложка Culture с закрученной ручкой. Идеально подходит для смешивания коктейлей и украшения напитков. Изготовлена из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "SPN005",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "30 см",
          weight: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мадлер",
          image: "https://sc01.alicdn.com/kf/Hd907ec1001c6479fbb1c19cadfff461du/229528574/Hd907ec1001c6479fbb1c19cadfff461du.jpg",
          price: 600.0,
          description:
            "Мадлер Culture для раздавливания фруктов и трав. Идеально подходит для приготовления мохито и других коктейлей, требующих измельчения ингредиентов. Изготовлен из натурального дерева, устойчивого к влаге и механическим повреждениям.",
          article: "MUD006",
          brand: "Culture",
          material: "Дерево",
          dimensions: "20x5 см",
          weight: 0.25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Стейнер",
          image: "https://avatars.mds.yandex.net/get-mpic/6321906/2a00000191848ec4fda78160736058494266/optimize",
          price: 700.0,
          description:
            "Ситечко-стрейнер Culture для коктейлей. Идеально подходит для фильтрации напитков и удаления мякоти и льда. Изготовлен из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "STR007",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "10x10 см",
          weight: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Барный гейзер",
          image: "https://cdn1.ozone.ru/s3/multimedia-m/6056774146.jpg",
          price: 300.0,
          description:
            "Насадка-гейзер Culture для бутылок. Идеально подходит для газирования воды и коктейлей. Изготовлен из пищевого пластика, устойчивого к воздействию кислот и щелочей.",
          article: "GEZ008",
          brand: "Culture",
          material: "Пластик",
          dimensions: "5x5 см",
          weight: 0.05,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Сквизер",
          image: "https://avatars.mds.yandex.net/get-mpic/1514097/2a00000191864b494a6f8947ccca05a658f5/optimize",
          price: 900.0,
          description:
            "Пресс для выжимки цитрусовых Culture. Идеально подходит для получения свежего сока из лимонов, лаймов и апельсинов. Изготовлен из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "SQZ009",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "15x10 см",
          weight: 0.4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Риммер",
          image: "https://cdn1.ozone.ru/s3/multimedia-1-e/6996908534.jpg",
          price: 750.0,
          description:
            "Риммер барный Culture. Аксессуар предназначенный для украшения бокалов солью и сахаром. Идеально подходит для создания эффектных краев на бокалах для маргариты и других коктейлей. Изготовлен из пищевого пластика, устойчивого к воздействию кислот и щелочей.",
          article: "RIM010",
          brand: "Culture",
          material: "Пластик",
          dimensions: "10x5 см",
          weight: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Штопор",
          image: "https://static.onlinetrade.ru/img/items/b/podarochnyy_nabor_dlya_vina_vacu_vin_experience_2416450_7.jpg",
          price: 450.0,
          description:
            "Классический штопор Culture для бутылок с удобной ручкой. Идеально подходит для открывания винных бутылок. Изготовлен из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "COR011",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "12x3 см",
          weight: 0.15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Нож для цедры",
          image: "https://adamantcom.ru/upload/masterglass/images/14591399171802970151/4034_43817.jpg",
          price: 650.0,
          description:
            "Специальный нож для снятия цедры с цитрусовых Culture. Идеально подходит для украшения коктейлей и десертов. Изготовлен из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "ZST012",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "15x2 см",
          weight: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Щипцы для льда и айс-бакет",
          image: "https://img.joomcdn.net/df2ed35fbf023f7c37678009dba247786ba88fdc_1024_1024.jpeg",
          price: 1100.0,
          description:
            "Набор Culture: ведро для льда и щипцы для удобного извлечения льда. Идеально подходит для хранения и подачи льда. Изготовлен из нержавеющей стали, устойчивой к коррозии и долговечной в использовании.",
          article: "ICE013",
          brand: "Culture",
          material: "Нержавеющая сталь",
          dimensions: "20x15 см",
          weight: 0.8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Устройство для газирования напитков",
          image: "https://avatars.mds.yandex.net/get-mpic/1855911/img_id3290641034727827176.jpeg/orig",
          price: 4500.0,
          description:
            "Сифон для газирования воды и коктейлей Culture с дополнительными аксессуарами. Идеально подходит для создания газированных напитков в домашних условиях. Изготовлен из металла, устойчивого к коррозии и долговечного в использовании.",
          article: "SYF014",
          brand: "Culture",
          material: "Металл",
          dimensions: "25x10 см",
          weight: 1.2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Шпажки, соломинки и зонтики",
          image: "https://avatars.mds.yandex.net/get-mpic/3907807/2a000001911de3b4d87dc24318a6e6c21378/orig",
          price: 200.0,
          description:
            "Набор Culture для украшения коктейлей: шпажки, соломинки и зонтики. Идеально подходит для создания праздничной атмосферы и украшения напитков. Изготовлен из пищевого пластика и бумаги, безопасных для здоровья.",
          article: "ACC015",
          brand: "Culture",
          material: "Пластик, бумага",
          dimensions: "10x10 см",
          weight: 0.1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true } // Возвращаем созданные продукты
    );

    // Создаем записи в ShopStorage для каждого продукта
    await queryInterface.bulkInsert(
      "ShopStorages",
      products.map((product) => ({
        productId: product.id,
        quantity: 100, // Устанавливаем количество
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  async down(queryInterface, Sequelize) {
    // Удаляем записи из ShopStorage
    await queryInterface.bulkDelete("ShopStorages", null, {});
    // Удаляем продукты
    await queryInterface.bulkDelete("Products", null, {});
  },
};