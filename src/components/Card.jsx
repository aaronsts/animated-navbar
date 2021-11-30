// React Reveal
import Fade from "react-reveal/Fade";

// Assets
const Card = (props) => {
  let even = true;
  if (props.index % 2) {
    even = false;
  }

  return (
    <Fade left mirror={even} cascade duration={2000}>
      <div className={props.index % 2 ? "card card-inverted" : "card"}>
        <div className="text-card">
          <div>
            <h2>{props.content.title}</h2>
          </div>
          <p>{props.content.description}</p>
        </div>
        <img
          src={props.content.image}
          alt="3D rendered hand"
          className="image-card"
        />
      </div>
    </Fade>
  );
};

export default Card;
