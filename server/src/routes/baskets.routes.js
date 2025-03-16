const express = require('express');
const router = express.Router();
const { Basket, Product } = require('../db/models');
const verifyAccessToken = require("../middleware/verifyAccessToken");

// Пост-запрос для добавления товара в корзину
router.post('/', verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id; // Получаем ID пользователя из токена
  try {
    const { productId, quantity } = req.body;

    // Ищем запись в корзине для данного пользователя и товара
    const cartItem = await Basket.findOne({
      where: { userId, productId },
    });

    if (cartItem) {
      // Если запись уже существует, обновляем количество
      cartItem.quantity = quantity; // Устанавливаем новое количество
      await cartItem.save(); // Сохраняем изменения
    } else {
      // Если записи нет, создаем новую
      await Basket.create({ userId, productId, quantity });
    }

    res.status(201).json({ message: 'Корзина обновлена' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение всех товаров в корзине
router.get('/', verifyAccessToken, async (req, res) => { 
  const userId = res.locals.user.id;

  try {
    const cartItems = await Basket.findAll({
      where: { userId },
      include: [
        {
          model: Product,
          attributes: ['id', 'name', 'image', 'price', 'description']
        },
      ],
    });

    res.status(200).json(cartItems || []);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Удаление товара из корзины по ID
router.delete('/:id', async (req, res) => { 
  try {
    const { id } = req.params;
    await Basket.destroy({ where: { id } });
    return res.status(200).json('OK');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
