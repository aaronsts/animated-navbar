import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(0);

  // navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY % 500);
    if (window.scrollY < 500) {
      setNavbarColor(window.scrollY % 500);
    } else {
      setNavbarColor(100);
    }
  };

  const style = {
    backgroundColor: `hsl(353, 51%,${100 - navbarColor}%)`,
    color: `hsl(353, 51%,${navbarColor}%)`,
  };

  const linkStyle = {
    color: `hsl(353, 51%,${navbarColor}%)`,
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div className="navbar" style={style}>
      <h1>Futurism</h1>
      <ul>
        <li>
          <a style={linkStyle} href="#home">
            Home
          </a>
        </li>
        <li>
          <a style={linkStyle} href="#about">
            About
          </a>
        </li>
        <li>
          <a style={linkStyle} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
