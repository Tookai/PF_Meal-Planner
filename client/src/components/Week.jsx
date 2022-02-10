import "../styles/week.css";
import Recette from "./Recette";

const Week = () => {
  const ing = ["salade", "riz", "brebis"];
  return (
    <div className="week">
      <div className="box">
        <Recette jour="Lundi" plat="Soupe au choux" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Mardi" plat="Babibel" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Mercredi" plat="Salade" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Jeudi" plat="Purée" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Vendredi" plat="Pates" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Samedi" plat="Legumes" ingredients={ing} />
      </div>
      <div className="box">
        <Recette jour="Dimanche" plat="Poulet" ingredients={ing} />
      </div>
    </div>
  );
};

export default Week;
