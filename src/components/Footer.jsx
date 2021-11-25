import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Futurism</h2>
      <IconContext.Provider value={{ size: "2rem" }}>
        <ul>
          <li>
            <a href="https://github.com/aaronsts">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aaronstaes/">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aaronstaes/">
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </IconContext.Provider>
      <p>Personal project made with ♥️ by Aäron Staes</p>
    </div>
  );
};

export default Footer;
