const mongoose = require("mongoose");

const MealSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    ingredients: { type: Array, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", MealSchema);
