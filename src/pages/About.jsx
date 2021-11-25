import AboutCard from "./AboutCard";
import { RiBuilding2Fill } from "react-icons/ri";
import { BsStack } from "react-icons/bs";
import { MdBubbleChart } from "react-icons/md";

const About = () => {
  return (
    <div className="about-container" id="about">
      <h3>About</h3>
      <hr />
      <div className="about-content">
        <AboutCard
          icon={<RiBuilding2Fill />}
          text={
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          }
        />
        <AboutCard
          icon={<BsStack />}
          text={
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
        <AboutCard
          icon={<MdBubbleChart />}
          text={
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          }
        />
      </div>
    </div>
  );
};

export default About;
