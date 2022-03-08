import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import "./Style.css";
//importing components here
import Home from "./Components/Home.js";
import About from "./Components/About.js";
import Pricing from "./Components/Pricing.js";
import Contact from "./Components/Contact.js";
import Navbar from "./Components/Navbar.js";
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="about" element={<About />} />
      <Route path ="pricing" element={<Pricing />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
