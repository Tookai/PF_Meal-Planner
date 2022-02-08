const Meal = require("../models/Meal");

exports.createMeal = async (req, res) => {
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
};

exports.readAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.searchByIngredients = async (req, res) => {
  const ingredient = req.params.ingredient;
  const reg = new RegExp(ingredient, "i");
  try {
    const meals = await Meal.find({ ingredients: reg });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.searchByTitle = async (req, res) => {
  const title = req.params.title;
  const reg = new RegExp(title, "i");
  try {
    const meals = await Meal.find({ title: reg });
    res.status(200).json(meals);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteMeal = async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.body.mealId);
    res.status(200).json(`Plat supprimé par ${req.user.pseudo}`);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.oneRandom = async (req, res) => {
  try {
    let one = await Meal.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(one);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.sevenRandom = async (req, res) => {
  try {
    let one = await Meal.aggregate([{ $sample: { size: 7 } }]);
    res.status(200).json(one);
  } catch (err) {
    res.status(500).json(err);
  }
};
