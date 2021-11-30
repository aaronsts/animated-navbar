import "./App.css";

import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Navbar />
      <div className="main">
        <Home />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
