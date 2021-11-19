// Assets
const Card = (props) => {
  return (
    <div className={`card ${props.index % 2 && "card-inverted"}`}>
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
  );
};

export default Card;
