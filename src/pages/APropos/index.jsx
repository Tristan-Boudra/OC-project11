import "../../styles/main.scss";
import header from "../../assets/images/aPropos/header.png";
import Collapse from "../../components/Collapse";
import Banner from "../../components/Banner";

function APropos() {
  const dataCollapse = [
    {
      title: "Fiabilite",
      content:
        "Les annonces postées sur Kasa ne sont pas forceMENT fiables. Elles sont soumises à nos tests exhaustifs. Un retraitement des photos est toujours prévu.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminant ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurite",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de veiller au respect des autres.",
    },
  ];

  return (
    <div className="aPropos">
      <Banner src={header} />
      <div className="listeCollapse">
        {dataCollapse.map((collapse, index) => (
          <Collapse
            key={`${collapse.title}-${index}`}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </div>
    </div>
  );
}

export default APropos;
