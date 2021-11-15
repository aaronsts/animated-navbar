import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <Router>
        <header>
          <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        </header>
        <Navbar show={showNav} />
        <div className="main">
          <Route path="/" exact={true} component={Home} />
        </div>
      </Router>
    </>
  );
}

export default App;
