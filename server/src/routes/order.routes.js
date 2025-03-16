const router = require("express").Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");
const { Order, Basket } = require('../db/models');

router.post('/', verifyAccessToken, async (req, res) => {
    const userId = res.locals.user.id;
    try {
        // Создаем новый заказ в базе данных
        const newOrder = await Order.create({
            comment: req.body.comment,
            address: req.body.address,
            date: req.body.date,
            telephone: req.body.telephone,
            recipient: req.body.name,
            basket: req.body.basket,
            userId: userId // Добавляем userId к заказу
        });

        await Basket.destroy({
          where: { userId: userId }
      });

        // Отправляем ответ с созданным заказом
        return res.status(201).json({ message: 'Заказы обновлены', order: newOrder });
    } catch (error) {
        console.error('Ошибка при создании заказа:', error);
        res.status(500).json({ error: error.message });
    }
});

  router.get('/', verifyAccessToken, async (req, res) => {
    const user = res.locals.user
    const userId = user.id;
    try {
      if(user.isAdmin) {
        const orders = await Order.findAll()
        return res.status(200).json({ message: 'Все заказы', orders });
      }
      const orders = await Order.findAll({ where: { userId } })
      return res.status(200).json({ message: 'Все заказы', orders });
    } catch (error) {
      console.error('Ошибка получения всех заказов:', error);
    }
  });

  router.post('/status', verifyAccessToken, async (req, res) => {
    const user = res.locals.user

    try {
      if(!user.isAdmin) {
        return res.status(403).json({ error: 'Нет доступа' });
      }
        const { status, id } = req.body;
        const order = await Order.findOne({ where: { id } });

        if (!order) {
            return res.status(404).json({ error: 'Заказ не найден или не принадлежит пользователю' });
        }
        order.status = status;
        await order.save(); 
        return res.status(200).json({ message: 'Статус заказа обновлен', order });
    } catch (error) {
        console.error('Ошибка при обновлении статуса заказа:', error);
        res.status(500).json({ error: error.message });
    }
});

router.delete('/:id', verifyAccessToken, async (req, res) => {
  const user = res.locals.user;
  const { id } = req.params; // Получаем ID заказа из параметров маршрута
  try {
    if (!user.isAdmin) {
      return res.status(403).json({ error: 'Нет доступа' });
    }
    const order = await Order.findOne({ where: { id } });
    if (!order) {
      return res.status(404).json({ error: 'Заказ не найден' });
    }
    await order.destroy();
    return res.status(200).json({ message: 'Заказ успешно удален' });
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;