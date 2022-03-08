import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "../Style.css";
import "../Styles/Navbar.css";
export default function Navbar(){
	return (
		<div className="Nav">
		<nav className="Navbar">
       <Link to="/" className="home"> ReyesApplianceRepair</Link>
       <Link to="about" className="about"> About </Link>
       <Link to="pricing" className="pricing"> Pricing </Link>
       <Link to="contact" className="contact"> Contact </Link>
       </nav>
       </div>
       )



}