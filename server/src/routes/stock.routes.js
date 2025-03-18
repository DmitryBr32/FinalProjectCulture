const router = require("express").Router();
const StockController = require("../controllers/Stock.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/:id", verifyAccessToken, StockController.getUserStock);
router.post("/:id", verifyAccessToken, StockController.createUserStock);
router.put(
  "/:id/item/:itemId",
  verifyAccessToken,
  StockController.updateStockThunk
);
router.delete(
  "/:id/item/:itemId",
  verifyAccessToken,
  StockController.deleteUserStock
);

module.exports = router;
