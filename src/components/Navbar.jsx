import { Link } from "react-router-dom";

const Navbar = (props) => {
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
