import "../styles/random.css";
import { Link } from "react-router-dom";

const Random = () => {
  const plat = "Pâtes Carbonara";
  return (
    <div className="random">
      Ce soir on pourrait manger : <Link to="recette">{plat}</Link> !
    </div>
  );
};

export default Random;
