const router = require("express").Router();
const authRoutes = require("./auth.routes");
const shopRoutes = require("./shop.routes");
const basketsRoutes = require("./baskets.routes");
const ingredientRoutes = require("./ingredient.routes");
const recipeRoutes = require("./recipe.routes");
const stockRoutes = require("./stock.routes");
const orderRoutes = require("../routes/order.routes");
const StorageRoutes = require("../routes/storage.router");
const recfavouritesRoutes = require("../routes/recfavourites.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/auth", authRoutes);
router.use("/shop", shopRoutes);
router.use("/baskets", basketsRoutes);
router.use("/ingredient", ingredientRoutes);
router.use("/recipe", recipeRoutes);
router.use("/recfavourite", recfavouritesRoutes);
router.use("/stock", stockRoutes);
router.use("/shop/products/:id", shopRoutes);
router.use("/order", orderRoutes);
router.use("/shop-storage", StorageRoutes);
router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
