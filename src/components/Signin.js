import React from "react";
import logo from "../img/log.svg";
import "../css/signin.css"
import { NavLink } from "react-router-dom";
 
const Signin = ()=>{
    return(
        <>
              <div className="outer-div">
              <div className="container">
                  <div className="left_div">
                          <img className="img" src={logo} alt="" />
                         

                  </div>
                  <div className="right_div">
                          <input type="email" name="email" id="" value="" placeholder="Enter Your Email"/>
                          <input type="password" name="password" id="" value="" placeholder="Enter Your Password"/>
                          <button type="submit" className="btn">Log In</button>
                          <NavLink exact to="/signup">Don't Have A Account?</NavLink>
                          
                  </div>
              </div>
              </div>
        </>
    );
}
export default  Signin;