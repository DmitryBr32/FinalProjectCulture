const { Op } = require("sequelize");
const { Recipe, Ingredient, RecComponent } = require("../db/models");

class RecipeService {
  static async getAllRecipes() {
    return await Recipe.findAll();
  }

  static async getRecipesByIngr(variant) {
    const whereClause = {};

    if (Object.keys(variant)[0] === "type") {
      whereClause.type = { [Op.iLike]: `%${variant.type}%` };
    } else if (Object.keys(variant)[0] === "title") {
      whereClause.title = { [Op.iLike]: `%${variant.title}%` };
    } else {
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
              where: whereClause,
            },
          ],
        },
      ],
    });
  }

  static async getRecipeById(id) {
    return await Recipe.findByPk(id);
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

  static async createRecipe(recipeData) {
    return await Recipe.create(recipeData);
  }

  static async updateRecipe(id, recipeData) {
    return await Recipe.update(recipeData, { where: { id } });
  }

  static async deleteRecipe(id) {
    return await Recipe.destroy({ where: { id } });
  }
}

module.exports = RecipeService;
