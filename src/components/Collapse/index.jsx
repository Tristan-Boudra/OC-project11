import React, { useState } from "react";
import "../../styles/main.scss";
import chevron from "../../assets/icons/chevron.svg";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapseHeader" onClick={toggleCollapse}>
        <h2 className="collapseTitle">{props.title}</h2>
        <img
          src={chevron}
          alt="chevron"
          className={`chevron ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      {isOpen && (
        <div className="collapseContent">
          {Array.isArray(props.content) ? (
            props.content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{props.content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;
