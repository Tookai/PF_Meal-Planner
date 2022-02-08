const Favorite = require("../models/Favorite");
const Meal = require("../models/Meal");

exports.addMeal = async (req, res) => {
  try {
    const newFavorite = new Favorite({
      mealId: req.body.mealId,
      userId: req.user.userId,
    });
    await newFavorite.save();
    res.status(200).json(`Le plat a été ajouté aux favoris.`);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getMeals = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.userId });
    const mealsId = favorites.map((meal) => meal.mealId);
    const favMeals = await Meal.find({ _id: mealsId });
    res.status(200).json(favMeals);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    await Favorite.findOneAndDelete({ mealId: req.body.mealId, userId: req.user.userId });
    res.status(200).json(`Le plat a été supprimé des favoris.`);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.userId });
    const mealsId = favorites.map((meal) => meal.mealId);
    await Favorite.deleteMany({ mealId: mealsId, userId: req.user.userId });
    res.status(200).json(`La liste de favoris a été supprimée.`);
  } catch (err) {
    res.status(500).json(err);
  }
};
