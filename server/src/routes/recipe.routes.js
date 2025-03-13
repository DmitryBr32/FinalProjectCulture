const router = require("express").Router();
const RecipeController = require("../controllers/Recipe.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken.js");

router.get("/", RecipeController.getIngredients);
router.get("/:id", RecipeController.getIngredient);
router.post("/", RecipeController.addIngredient);
router.put("/:id", verifyAccessToken, RecipeController.updateIngredient);
router.delete("/:id", verifyAccessToken, RecipeController.removeIngredient);

module.exports = router;
