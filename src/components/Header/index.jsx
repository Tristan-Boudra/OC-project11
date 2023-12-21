import { Link } from "react-router-dom";
import "../../styles/main.scss";
import logoKasa from "../../assets/images/logo/kasa.png";

function Header() {
  return (
    <nav>
      <img src={logoKasa} alt="Logo Kasa" className="logo" />
      <div className="links">
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/a-propos" className="link">
          A propos
        </Link>
      </div>
    </nav>
  );
}

export default Header;
