import logo from "../assets/paw-solid.svg";

const Navbar = (props) => {
  return (
    <div className={props.show ? "side-nav active" : "side-nav"}>
      <img src={logo} alt="paw" className="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
