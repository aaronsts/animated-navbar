import { IconContext } from "react-icons";

const AboutCard = ({ icon, text }) => {
  return (
    <IconContext.Provider value={{ size: "4rem" }}>
      <div>
        {icon}
        <h2>Lorem Ipsum</h2>
        <p>{text}</p>
      </div>
    </IconContext.Provider>
  );
};

export default AboutCard;
