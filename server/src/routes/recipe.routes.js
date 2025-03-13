const router = require("express").Router();
const RecipeController = require("../controllers/Recipe.controller.js");
const verifyAccessToken = require("../middleware/verifyAccessToken.js");

router.get("/", RecipeController.getRecipes);
router.get("/:id", RecipeController.getRecipe);
router.post("/", RecipeController.addRecipe);
router.put("/:id", verifyAccessToken, RecipeController.updateRecipe);
router.delete("/:id", verifyAccessToken, RecipeController.removeRecipe);

module.exports = router;
