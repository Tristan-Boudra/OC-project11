import "../../styles/main.scss";
import kasaWhite from "../../assets/images/logo/kasaWhite.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={kasaWhite} alt="Kasa logo" />
      <p className="text">
        © 2020 Kasa. All <br className="break" /> rights reserved
      </p>
    </footer>
  );
}

export default Footer;
