import "../../styles/main.scss";
import header from "../../assets/images/home/header.png";
import Card from "../../components/Card";
import Banner from "../../components/Banner";
import data from "../../data/index.json";

function Home() {
  return (
    <div>
      <Banner src={header} text="Chez vous, partout et ailleurs" />
      <div className="listeLocation">
        {data.map((logement) => (
          <Card
            key={logement.id}
            picture={logement.cover}
            title={logement.title}
            id={logement.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
