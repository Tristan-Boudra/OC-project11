import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";
import chevron from "../../assets/icons/chevron.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapseHeader" onClick={toggleCollapse}>
        <h2 className="collapseTitle">{title}</h2>
        <img
          src={chevron}
          alt="chevron"
          className={`chevron ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {isOpen && <p className="collapseContent">{content}</p>}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Collapse;
