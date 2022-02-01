import "../styles/week.css";
import Random from "./Random";

const Week = () => {
  return (
    <div className="week">
      <div className="box">
        <Random jour="Lundi" plat="Soupe au choux" />
      </div>
      <div className="box">
        <Random jour="Mardi" plat="Babibel" />
      </div>
      <div className="box">
        <Random jour="Mercredi" plat="Salade" />
      </div>
      <div className="box">
        <Random jour="Jeudi" plat="Purée" />
      </div>
      <div className="box">
        <Random jour="Vendredi" plat="Pates" />
      </div>
      <div className="box">
        <Random jour="Samedi" plat="Legumes" />
      </div>
      <div className="box">
        <Random jour="Dimanche" plat="Poulet" />
      </div>
    </div>
  );
};

export default Week;
