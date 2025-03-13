const router = require("express").Router();
const StockController = require("../controllers/Stock.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/", StockController.getUserStock);
router.update("/", verifyAccessToken, StockController.updateUserStock);

module.exports = router;
