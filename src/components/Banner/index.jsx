import "../../styles/main.scss";

function Banner(props) {
  return (
    <div className="header">
      <img src={props.src} alt="Banner" className="imgHeader" />
      <p className="textHeader">{props.text}</p>
    </div>
  );
}

export default Banner;
