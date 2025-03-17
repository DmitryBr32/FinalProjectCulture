const router = require("express").Router();
const { Product, ShopStorage } = require("../db/models");
const formatResponse = require("../utils/formatResponse");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get('/', async (req, res) => {
    try {
        // Получаем все продукты с количеством из ShopStorage
        const products = await Product.findAll({
            include: [{
                model: ShopStorage,
                attributes: ['quantity'],
                required: false // даже если нет quantity все равно получить продукт
            }]
        });

        // Форматируем результат, чтобы если ShopStorage отсутствует, quantity был 0
        const formattedProducts = products.map(product => ({
            ...product.toJSON(),
            quantity: product.ShopStorage ? product.ShopStorage.quantity : 0
        }));

        res.status(200).json(formattedProducts);
    } catch (error) {
        console.error('Ошибка получения всех продуктов:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

router.post("/", verifyAccessToken, async (req, res) => {
    const user = res.locals.user;
    const { 
        id, name, image, price, description, quantity, 
        article, brand, material, dimensions, weight, 
    } = req.body;

    try {
        if (!user.isAdmin) {
            return res.status(403).json({ error: "Нет доступа" });
        }

        const result = await Product.sequelize.transaction(async (t) => {
            // Создаем или обновляем продукт с новыми полями
            const [product, created] = await Product.findOrCreate({
                where: { id },
                defaults: { 
                    name, 
                    image, 
                    price, 
                    description, 
                    article, 
                    brand, 
                    material, 
                    dimensions, 
                    weight, 
                },
                transaction: t,
            });

            if (!created) {
                // Обновляем продукт с новыми полями
                await product.update({ 
                    name, 
                    image, 
                    price, 
                    description, 
                    article, 
                    brand, 
                    material, 
                    dimensions, 
                    weight, 
                }, { transaction: t });
            }

            let shopStorage = null;
            if (quantity !== undefined) {
                const [storage, storageCreated] = await ShopStorage.findOrCreate({
                    where: { productId: product.id },
                    defaults: { quantity },
                    transaction: t,
                });

                if (!storageCreated) {
                    await storage.update({ quantity }, { transaction: t });
                }

                shopStorage = storage;
            }

            return { product, shopStorage };
        });

        res.status(200).json(formatResponse(200, "Success", result));
    } catch (error) {
        res.status(500).json(formatResponse(500, "Error creating/updating product and storage", error.message));
    }
});

router.delete("/:id", verifyAccessToken, async (req, res) => {
    const user = res.locals.user;
    const { id } = req.params;

    try {
        if (!user.isAdmin) {
            return res.status(403).json({ error: "Нет доступа" });
        }

        // Начинаем транзакцию без явного импорта sequelize
        await Product.sequelize.transaction(async (t) => {
            await ShopStorage.destroy({
                where: { productId: id },
                transaction: t,
            });

            const deletedProduct = await Product.destroy({
                where: { id },
                transaction: t,
            });

            if (deletedProduct === 0) {
                throw new Error("Продукт не найден");
            }
        });

        res.status(200).json(formatResponse(200, "Продукт успешно удален", { id }));
    } catch (error) {
        res.status(500).json(formatResponse(500, "Ошибка при удалении продукта и связанных данных", error.message));
    }
});

module.exports = router;