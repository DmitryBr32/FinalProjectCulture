const StockService = require("../services/Stock.service");

class StockController {
  static async getUserStock(req, res) {
    const { id } = req.params;
    console.log("ID из запроса:", req.params.id);
    try {
      const stock = await StockService.getUserStock(id);
      res.status(200).json(stock);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }

  static async createUserStock(req, res) {
    const { id } = req.params;
    const { ingredientTypeId, ingredientBalance, title, strength } = req.body;
    try {
      const stock = await StockService.createUserStock(
        id,
        ingredientTypeId,
        ingredientBalance,
        title,
        strength
      );
      res.status(200).json({
        statusCode: 200,
        message: "Stock created successfully",
        stock,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error", message: error.message });
    }
  }

  static async createOrUpdateUserStock(req, res) {
    const { id } = req.params;
    const { ingredientTypeId, ingredientBalance, title, strength } = req.body;
    try {
      const stock = await StockService.findOrCreateUserStock(
        id,
        ingredientTypeId,
        ingredientBalance,
        title,
        strength
      );
      res.status(200).json({
        statusCode: 200,
        message: "Stock updated successfully",
        stock,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json((500, "Server error", null, error.message));
    }
  }

  static async deleteUserStock(req, res) {
    const { id: userId, itemId } = req.params;
    if (!itemId) {
      return res.status(400).json({ error: "Stock item ID is required" });
    }
    try {
      await StockService.delete(userId, Number(itemId));
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Ошибка сервера" });
    }
  }
}

module.exports = StockController;
