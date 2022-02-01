const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

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
