import "../styles/random.css";
import { Link } from "react-router-dom";
import Recette from "./Recette";
import { useQuery } from "react-query";
import * as api from "../apiCalls";

const Random = () => {
  const { data, isLoading, isError, refetch } = useQuery("one random", api.oneRandom);

  if (isLoading || isError) {
    return <div>...</div>;
  }

  return (
    <div className="random">
      <div className="random__wrapper">
        <Recette key={data[0]._id} jour="Ce soir" plat={data[0].title} ingredients={data[0].ingredients} />
      </div>

      <button onClick={refetch} className="random__reloadBtn">
        Bof, ça me dit rien.
      </button>
    </div>
  );
};

export default Random;
