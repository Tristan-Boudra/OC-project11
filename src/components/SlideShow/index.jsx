import "../../styles/main.scss";
import React, { useState } from "react";
import chevron from "../../assets/icons/chevron.svg";

function SlideShow(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === props.pictures.length - 1 ? 0 : nextIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.pictures.length - 1 : prevIndex - 1,
    );
  };

  return props.pictures.length > 1 ? (
    <div className="slideShow">
      <img
        alt="chevronPrevSlide"
        src={chevron}
        className="chevronLeft"
        onClick={prevSlide}
      ></img>
      <img src={props.pictures[currentIndex]} alt="" className="imgSlide" />
      <img
        alt="chevronNextSlide"
        src={chevron}
        className="chevronRight"
        onClick={nextSlide}
      ></img>
      <p className="pagination">{`${currentIndex + 1} / ${
        props.pictures.length
      }`}</p>
    </div>
  ) : (
    <div className="slideShow">
      <img className="imgSlide" src={props.pictures[0]} alt="" />
    </div>
  );
}

export default SlideShow;
