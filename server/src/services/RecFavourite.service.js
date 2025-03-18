const { RecFavourite } = require("../db/models");

class RecFavouriteService {
  static async findOne(userId, recipeId) {
    return await RecFavourite.findOne({
      where: { userId: userId, recipeId: recipeId },
    });
  }

  static async findOrCreate(userId, recipeId) {
    const [recFavourite, created] = await RecFavourite.findOrCreate({
      where: {
        userId: userId,
        recipeId: recipeId,
      },
    });
    if (created) {
      return recFavourite.id;
    } else {
      return null;
    }
  }

  static async deleteFavourite(userId, recipeId) {
    return await RecFavourite.destroy({
      where: { userId: userId, recipeId: recipeId },
    });
  }

  static async getLikesCount(recipeId) {
    const favStrings = await RecFavourite.findAll({
      where: { recipeId: recipeId },
    });
    return favStrings.length;
  }
}

module.exports = RecFavouriteService;
