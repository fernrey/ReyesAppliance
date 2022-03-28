import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import "../Style.css";
import "../Styles/Navbar.css";

export default function Navbar(){
	return (
	<div className="Nav">
        <div className="MainTitle"> ReyesApplianceRepair </div>
	   <nav className="Navbar">
        <div>
        <Link to="/" className="home"> ReyesApplianceRepair</Link>
        </div>
        <Link to="about" className="about"> About </Link>
        <Link to="pricing" className="pricing"> Pricing </Link>
        <Link to="contact" className="contact"> Contact </Link>
        </nav>
    </div>
       )



}