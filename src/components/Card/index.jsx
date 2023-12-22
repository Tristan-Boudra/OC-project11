import "../../styles/main.scss";
import PropTypes from "prop-types";

function Card({ title, picture }) {
  return (
    <div className="card">
      <img src={picture} alt="freelance" className="imgCard" />
      <div className="title">{title}</div>
      <div className="overlay"></div>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

Card.defaultProps = {
  title: "No title",
};

export default Card;
