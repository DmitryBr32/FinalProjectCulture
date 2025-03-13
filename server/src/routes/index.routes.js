const router = require("express").Router();
const authRoutes = require("./auth.routes");
const shopRoutes = require("./shop.routes");
const basketsRoutes = require("./baskets.routes");
const ingredientRoutes = require("./ingredient.routes");
const stockRoutes = require("./stock.routes")
const formatResponse = require("../utils/formatResponse");

router.use("/auth", authRoutes);
router.use("/shop", shopRoutes);
router.use("/baskets", basketsRoutes);
router.use("/ingredient", ingredientRoutes);
router.use("/stock", stockRoutes);
router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;