import "./App.css";

import { Routes, Route } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

// Hooks
import { useState } from "react";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [navbarColor, setNavbarColor] = useState(0);

  // navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log((window.scrollY % 100) / 100);
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

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <>
      <header style={style}>
        <h1>Futurism</h1>
        {/* <GiHamburgerMenu onClick={() => setShowNav(!showNav)} /> */}
      </header>
      {/* <Navbar show={showNav} /> */}
      <div className="main">
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" exact={true} element={<About />} />
          <Route path="/contact" exact={true} element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
