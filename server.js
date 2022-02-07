const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());
dotenv.config();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.error(err);
  });

app.get("*", async (req, res) => {
  try {
    res.status(200).json("Salut c le serveur");
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(5500, () => {
  console.log("Backend server is running!");
});
