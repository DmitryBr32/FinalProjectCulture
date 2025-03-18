const { Op } = require("sequelize");
const {
  Recipe,
  Ingredient,
  RecComponent,
  RecFavourite,
} = require("../db/models");
const IngredientService = require("./Ingredient.service");

class RecipeService {
  static async getAllRecipes() {
    return await Recipe.findAll({
      include: [
        {
          model: RecComponent,
          as: "Components",
          required: true,
          include: [
            {
              model: Ingredient,
              as: "ingredient",
            },
          ],
        },
      ],
    });
  }

  static async getAllRecipeTitles() {
    const recipesTitles = await Recipe.findAll({
      attributes: ["title"],
    });

    const titles = recipesTitles.map((recipe) => recipe.title.toLowerCase());
    return titles;
  }

  static async getRecipesByIngr(type) {
    if (!type) {
      return [];
    }
    return await Recipe.findAll({
      include: [
        {
          model: RecComponent,
          as: "Components",
          required: true,
          include: [
            {
              model: Ingredient,
              as: "ingredient",
              where: {
                type: {
                  [Op.iLike]: `%${type}%`,
                },
              },
            },
          ],
        },
      ],
    });
  }

  static async getRecipesUserFav(userId) {
    if (!userId) {
      return [];
    }
    return await Recipe.findAll({
      include: [
        {
          model: RecFavourite,
          as: "Favourites",
          where: {
            userId: userId,
          },
        },
      ],
    });
  }
  static async getRecipeById(id) {
    return await Recipe.findByPk(id, {
      include: [
        {
          model: RecComponent,
          as: "Components",
          required: true,
          include: [
            {
              model: Ingredient,
              as: "ingredient",
            },
          ],
        },
      ],
    });
  }

  static async getRecipeByTitle(title) {
    return await Recipe.findOne({
      where: { title: { [Op.iLike]: `%${title}%` } },
      include: [
        {
          model: RecComponent,
          as: "Components",
          required: true,
          include: [
            {
              model: Ingredient,
              as: "ingredient",
            },
          ],
        },
      ],
    });
  }

  static async createRecipe(recipeData, ingredientsData) {
    const recipe = await Recipe.create({
      title: recipeData.title,
      text: recipeData.text,
      discription: recipeData.discription,
      img: recipeData.img,
      strengthLevel: recipeData.strengthLevel,
      isShot: recipeData.isShot,
    });
    ingredientsData.forEach(async (ingredientData) => {
      const ingredient = await IngredientService.create(ingredientData);

      await RecComponent.create({
        recipeId: recipe.id,
        ingredientTypeId: ingredient.id,
        quantity: ingredientData.quantity,
      });
    });

    return recipe;
  }

  static async updateRecipe(id, recipeData, ingredientsData) {
    const findRecipe = await Recipe.findByPk(id);
    if (!findRecipe) {
      return null;
    } else {
      const updatedRecipe = await findRecipe.update({
        title: recipeData.title,
        text: recipeData.text,
        discription: recipeData.discription,
        img: recipeData.img,
        strengthLevel: recipeData.strengthLevel,
        isShot: recipeData.isShot,
      });

      RecComponent.destroy({ where: { recipeId: id } });

      ingredientsData.forEach(async (ingredientData) => {
        const ingredient = await IngredientService.create(ingredientData);

        await RecComponent.create({
          recipeId: id,
          ingredientTypeId: ingredient.id,
          quantity: ingredientData.quantity,
        });
      });

      return updatedRecipe;
    }
  }

  static async deleteRecipe(id) {
    return await Recipe.destroy({ where: { id } });
  }
}

module.exports = RecipeService;
