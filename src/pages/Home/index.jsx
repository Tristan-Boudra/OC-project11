import "../../styles/main.scss";
import header from "../../assets/images/home/header.png";
import Card from "../../components/Card";
import data from "../../data/index.json";

function Home() {
  return (
    <div>
      <div className="header">
        <img src={header} alt="Logo Kasa" className="imgHeader" />
        {/* <div className="overlay"></div> */}
        <p className="textHeader">
          Chez vous,
          <br className="break" /> partout et ailleurs
        </p>
      </div>
      <div className="listeLocation">
        {data.map((logement, index) => (
          <Card
            key={`${logement.title}-${index}`}
            picture={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
