const router = require("express").Router();
const authRoutes = require("./auth.routes");
const ingredientRoutes = require("./ingredient.routes");
const stockRoutes = require("./stock.routes");
const formatResponse = require("../utils/formatResponse");

router.use("/auth", authRoutes);
router.use("/ingredient", ingredientRoutes);
router.use("/stock", stockRoutes);

router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

module.exports = router;
