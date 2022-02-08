const router = require("express").Router();
const Favorite = require("../models/Favorite");
const Meal = require("../models/Meal");

const isLogged = require("../middlewares/auth");

router.post("", isLogged, async (req, res) => {
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
});

router.get("", isLogged, async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.userId });
    const mealsId = favorites.map((meal) => meal.mealId);
    const favMeals = await Meal.find({ _id: mealsId });
    res.status(200).json(favMeals);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
