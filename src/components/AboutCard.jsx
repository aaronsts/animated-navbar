import { IconContext } from "react-icons";

const AboutCard = ({ icon, text }) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "4rem" }}>
        {icon}
        <h2>Lorem Ipsum</h2>
        <p>{text}</p>
      </IconContext.Provider>
    </div>
  );
};

export default AboutCard;
