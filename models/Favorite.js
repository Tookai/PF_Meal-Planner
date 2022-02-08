const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    mealId: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
