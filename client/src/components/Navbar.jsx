import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar pad1">
      <h1>On manque quoi ?</h1>
      <div className="navbar__wrapper">
        <Link to="">
          <h3>ce soir</h3>
        </Link>
        <Link to="/week">
          <h3>cette semaine</h3>
        </Link>
        <Link to="/liste">
          <h3>ma liste</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
