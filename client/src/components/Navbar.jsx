import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
  const handleClick = () => {
    window.location.reload();
  };

  const logoff = () => {
    Cookies.remove("user");
    window.location.reload();
  };

  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")).pseudo : "toi";

  return (
    <nav className="navbar pad1">
      <div>
        <p>Salut, {user}. </p>
        <h1 onClick={handleClick}>On mange quoi ?</h1>
      </div>

      <div className="navbar__wrapper">
        <Link to="">
          <h3>ce soir</h3>
        </Link>
        <Link to="/semaine">
          <h3>cette semaine</h3>
        </Link>
        <Link to="/liste">
          <h3>ma liste</h3>
        </Link>

        {!Cookies.get("user") ? (
          <Link to="/connection">
            <h3>se connecter</h3>
          </Link>
        ) : (
          <h3 onClick={logoff}>se déconnecter</h3>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
