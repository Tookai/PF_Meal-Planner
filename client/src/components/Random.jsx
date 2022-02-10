import "../styles/random.css";
import { Link } from "react-router-dom";
import Recette from "./Recette";

const Random = () => {
  const ing = ["salade", "riz", "brebis"];
  return (
    <div className="random">
      <Recette jour="Ce soir" plat="Gratin de pate" ingredients={ing} />
    </div>
  );
};

export default Random;
