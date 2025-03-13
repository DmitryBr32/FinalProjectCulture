const router = require("express").Router();
const StockController = require("../controllers/Stock.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/:id", verifyAccessToken, StockController.getUserStock);
router.post("/:id", verifyAccessToken, StockController.findOrCreateUserStock);
router.delete("/:id", verifyAccessToken, StockController.deleteUserStock);

module.exports = router;
