const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Order } = require('../db/models');

router.post('/', verifyAccessToken, async (req, res) => {
    const userId = res.locals.user.id;
    try {
        // Создаем новый заказ в базе данных
        const newOrder = await Order.create({
            comment: req.body.comment,
            address: req.body.address,
            date: req.body.date,
            telephone: req.body.telephone,
            recipient: req.body.name, // Предполагаем, что `name` это имя получателя
            basket: req.body.basket,
            userId: userId // Добавляем userId к заказу
        });

        // Отправляем ответ с созданным заказом
        return res.status(201).json({ message: 'Заказы обновлены', order: newOrder });
    } catch (error) {
        console.error('Ошибка при создании заказа:', error);
        res.status(500).json({ error: error.message });
    }
});

  router.get('/', verifyAccessToken, async (req, res) => {
    const userId = res.locals.user.id;
    try {
      const orders = await Order.findAll({ where: { userId } })
      return res.status(200).json({ message: 'Все заказы', orders });
    } catch (error) {
      console.error('Ошибка получения всех заказов:', error);
    }
  });

module.exports = router;