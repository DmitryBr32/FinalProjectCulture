const router = require("express").Router();
const IngredientController = require("../controllers/Ingredient.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.get("/", IngredientController.getIngredients);
router.update("/", verifyAccessToken, IngredientController.updateIngredients);

module.exports = router;
