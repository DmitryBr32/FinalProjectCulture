const StockService = require("../services/Stock.service");

class StockController {
  static async getUserStock(req, res) {
    const { id } = req.params;
    try {
      const stock = await StockService.getStock(id);
      res.status(200).json(stock);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async createOrUpdateUserStock(req, res) {
    const { id } = req.params;
    const { ingredientId, ingredientBalance } = req.body;
    try {
      const stock = await StockService.findOrCreateUserStock(
        id,
        ingredientId,
        ingredientBalance
      );
      res.status(200).json(stock);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async deleteUserStock(req, res) {
    const { id } = req.params;
    const { ingredientId } = req.body;
    try {
      await StockService.delete(id, ingredientId);
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
}

module.exports = StockController;
