import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
