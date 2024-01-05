import "../../styles/main.scss";
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../../data/index.json";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/SlideShow";

function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundLogement = data.find((item) => item.id === id);
    if (!foundLogement) {
      setLogement(null);
    } else {
      setLogement(foundLogement);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Si le logement est null redirect vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />;
  }

  const stars = () => {
    const stars = [];
    const starRating = logement.rating;
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i > starRating ? "gray" : ""}`}>
          <i className="fas fa-star"></i>
        </span>,
      );
    }
    return stars;
  };

  return (
    <div className="containerFiche">
      <SlideShow pictures={logement.pictures} />
      <div className="container">
        <div className="headerFiche">
          <div className="fiche">
            <h2>{logement.title}</h2>
          </div>
          <p className="location">{logement.location}</p>
          <ul className="tags">
            {logement.tags.map((tag, index) => (
              <li key={index} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="containerInfo">
          <div className="ratings">
            <div className="star-rating">{stars()}</div>
          </div>
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt="host" />
          </div>
        </div>
      </div>
      <div className="containerCollapse">
        <Collapse
          title="Description"
          content={logement.description}
          className="collapse"
        />
        <Collapse
          title="Équipements"
          content={logement.equipments}
          className="collapse"
        />
      </div>
    </div>
  );
}

export default FicheLogement;
