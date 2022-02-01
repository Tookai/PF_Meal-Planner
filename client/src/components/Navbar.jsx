import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar pad1">
      <Link to="">
        <h1>On manque quoi ce soir ?</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
