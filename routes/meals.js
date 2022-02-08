const router = require("express").Router();
const mealCtrl = require("../controllers/meal");

const isAdmin = require("../middlewares/auth");

// CREATE A MEAL
router.post("", isAdmin, mealCtrl.createMeal);

// READ ALL MEALS
router.get("/all", mealCtrl.readAllMeals);

// SEARCH INGREDIENT
router.get("/i/:ingredient", mealCtrl.searchByIngredients);

// SEARCH TITLE
router.get("/t/:title", mealCtrl.searchByTitle);

// DELETE MEAL
router.delete("", isAdmin, mealCtrl.deleteMeal);

// GET ONE RANDOM MEAL
router.get("/one", mealCtrl.oneRandom);

// GET SEVEN RANDOM MEAL
router.get("/seven", mealCtrl.sevenRandom);

module.exports = router;
