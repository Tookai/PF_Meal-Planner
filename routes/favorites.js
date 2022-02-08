const router = require("express").Router();
const isLogged = require("../middlewares/auth");
const favoriteCtrl = require("../controllers/favorite");

// ADD MEAL TO FAVORITE
router.post("", isLogged, favoriteCtrl.addMeal);

// GET MEALS FROM FAVORITE LIST
router.get("", isLogged, favoriteCtrl.getMeals);

// DELETE ONE FAV MEAL BY MEAL_ID
router.delete("", isLogged, favoriteCtrl.deleteOne);

// DELETE ALL MEALS IN FAV LIST BY USER_ID
router.delete("/all", isLogged, favoriteCtrl.deleteAll);

module.exports = router;
