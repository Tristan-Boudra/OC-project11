import { NavLink } from "react-router-dom";
import "../../styles/main.scss";
import logoKasa from "../../assets/images/logo/kasa.png";

function Header() {
  return (
    <nav>
      <img src={logoKasa} alt="Logo Kasa" className="logo" />
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "link active" : "link"
          }
        >
          A propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
