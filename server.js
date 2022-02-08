const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
dotenv.config();

const userRoute = require("./routes/users");
const mealRoute = require("./routes/meals");
const favoriteRoute = require("./routes/favorites");

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });

// Routes
app.use("/api/user", userRoute);
app.use("/api/meal", mealRoute);
app.use("/api/favorite", favoriteRoute);

app.listen(5500, () => {
  console.log("Backend server is running!");
});
