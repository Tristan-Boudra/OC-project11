import { Link } from "react-router-dom";
import "../../styles/main.scss";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <Link to={`/fiche-logement/${props.id}`} className="card">
      <img
        src={props.picture}
        key={props.cardKey}
        alt="freelance"
        className="imgCard"
      />
      <div className="title">{props.title}</div>
      <div className="overlay"></div>
    </Link>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
