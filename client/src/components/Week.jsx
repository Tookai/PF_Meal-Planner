import { useQuery } from "react-query";
import "../styles/week.css";
import Recette from "./Recette";
import * as api from "../apiCalls";

const Week = () => {
  const { data, isLoading, isError, refetch } = useQuery("one random", api.sevenRandom);
  const week = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

  if (isLoading || isError) {
    return <div>...</div>;
  }
  return (
    <div className="week">
      {data.map((meal, index) => (
        <div className="box">
          <Recette key={meal._id} jour={week[index]} plat={meal.title} ingredients={meal.ingredients} />
        </div>
      ))}
    </div>
  );
};

export default Week;
