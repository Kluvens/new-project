import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search-icon.png";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="team">
                <img className="team-logo" src={logo} alt="Team Icon" />
                <h1 className="team-name">Structs.sh</h1>
            </div>

            <div className="search">
                <img className="search-icon" src={search_icon} alt="Search-icon" />
                <input className="search-input" type="text" placeholder="Search..." />
            </div>
        </nav>
    )
}