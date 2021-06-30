import React from 'react';
import "../css/navlink.css";
import "../css/master.css";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <div className="navbar">
            <div className="logo">
                <h2>GAME<span className="icon">X</span></h2>
            </div>
            <div className="navlist">
            <NavLink exact  className="nav" activeClassName="active" to="/">Home</NavLink>
            <NavLink exact  className="nav" activeClassName="active" to="/about">About</NavLink>
            <NavLink exact  className="nav" activeClassName="active" to="/contact">Contact</NavLink>
            <NavLink exact  className="nav" activeClassName="active" to="/signup">Register</NavLink>
            <NavLink exact  className="nav" activeClassName="active" to="/signin">Login</NavLink>
            </div>
        </div>
        </>
    )
}

export default Navbar;