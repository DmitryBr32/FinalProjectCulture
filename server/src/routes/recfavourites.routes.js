const router = require("express").Router();
const RecFavouriteController = require("../controllers/RecFavourite.controller.js");

router.post("/add", RecFavouriteController.addUserFavRecipe);
router.post("/del", RecFavouriteController.deleteUserFavRecipe); //

module.exports = router;
