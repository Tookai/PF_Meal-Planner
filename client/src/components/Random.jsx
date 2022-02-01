import "../styles/random.css";
import { Link } from "react-router-dom";

const Random = ({ jour, plat }) => {
  return (
    <div className="random">
      <p>
        {jour} : <Link to="/recette">{plat}</Link> !
      </p>
      <img
        src="https://images.pexels.com/photos/2703468/pexels-photo-2703468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Pâtes Carbonara"
      />
    </div>
  );
};

export default Random;
