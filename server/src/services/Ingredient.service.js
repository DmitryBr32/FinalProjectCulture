const { Ingredient } = require("../db/models");

class IngredientService {
  static async getIngredients() {
    return await Ingredient.findAll();
  }

  static async getIngredient(id) {
    return await Ingredient.findByPk(id);
  }

  static async create(ingredientData) {
    const [ingredient, created] = await Ingredient.findOrCreate({
      where: {
        type: ingredientData.type,
      },
      defaults: {
        type: ingredientData.type,
        isAlko: ingredientData.isAlko,
        imgUrl: ingredientData.imgUrl || "",
      },
    });
    if (created) {
      console.log(`Создан новый ингредиент: ${ingredient.type}`);
    } else {
      console.log(`Ингредиент ${ingredient.type} уже существует`);
    }
    return ingredient;
  }

  static async update(id, ingredientData) {
    return await Ingredient.update(ingredientData, { where: { id } });
  }

  static async delete(id) {
    return await Ingredient.destroy({ where: { id } });
  }
}

module.exports = IngredientService;
