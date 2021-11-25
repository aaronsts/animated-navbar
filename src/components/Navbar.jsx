import { useState } from "react";
import { useEffect } from "react";

const Navbar = (props) => {
  const [navPosition, setNavPosition] = useState(0);

  const changeTopPosition = () => {
    setNavPosition(window.scrollY);
  };

  useEffect(() => {
    changeTopPosition();

    window.addEventListener("scroll", changeTopPosition);
  });

  return (
    <div className={props.show ? "side-nav active" : "side-nav"}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
