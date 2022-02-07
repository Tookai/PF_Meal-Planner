const router = require("express").Router();
const Meal = require("../models/Meal");

const auth = require("../middlewares/auth");

// CREATE A MEAL
router.post("", auth, async (req, res) => {
  try {
    const newMeal = new Meal({
      title: req.body.title,
      ingredients: req.body.ingredients,
      author: req.user.pseudo,
    });

    await newMeal.save();
    res.status(200).json(`Le plat ${req.body.title} a été ajouté.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ ALL MEALS
router.get("/all", async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
});

// SEARCH INGREDIENT
router.get("/i/:ingredient", async (req, res) => {
  const ingredient = req.params.ingredient;
  const reg = new RegExp(ingredient, "i");
  try {
    const meals = await Meal.find({ ingredients: reg });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
});

//SEARCH TITLE
router.get("/t/:title", async (req, res) => {
  const title = req.params.title;
  const reg = new RegExp(title, "i");
  try {
    const meals = await Meal.find({ title: reg });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE MEAL
router.delete("", auth, async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.body.mealId);
    res.status(200).json(`Plat supprimé par ${req.user.pseudo}`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
