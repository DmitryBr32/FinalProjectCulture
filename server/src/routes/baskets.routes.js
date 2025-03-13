const express = require('express');
const router = express.Router();
const { Basket } = require('../db/models');

// Пост-запрос для добавления товара в корзину
router.post('/', async (req, res) => {  
  try {
    const { productId, quantity } = req.body;
    const cartItem = await Basket.create({ productId, quantity });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Получение всех товаров в корзине
router.get('/', async (req, res) => { 
  try {
    const cartItems = await Basket.findAll();
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Удаление товара из корзины по ID
router.delete('/:id', async (req, res) => { 
  try {
    const { id } = req.params;
    await Basket.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
