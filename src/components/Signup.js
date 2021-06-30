import React, { useState } from "react";
import "../css/signup.css";
import logo from "../img/reg.svg";
const Signup = ()=>{
    const[data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        password:"",
        conpassword:""
    });
    const submitEvent = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setData({...data,[name]:value});
    }
    const login = async(e)=>{
         e.preventDefault();
         const {name,email,phone,password,conpassword} = data;
         await fetch("http://localhost:8000/register",{
             method:"POST",
             headers:{
                 "Content-Type" : "application/json"
             },
             body: JSON.stringify({
                name,email,phone,password,conpassword
             })
         });
         
    }

    return(
        <>
             <div className="outer-main">
             <div className="main">
                 <div className="left">
                        
                          <form method="POST">
                          <input type="text" name="name" id="" value={data.name}  placeholder="Name :" onChange={submitEvent}/>
                           <input type="email" name="email" id="" value={data.email}  placeholder="Email :" onChange={submitEvent}/>
                           <input type="number" name="phone" id="" value={data.phone}  placeholder="Phone :" onChange={submitEvent}/>
                           <input type="password" name="password" id="" value={data.password}  placeholder="Password :" onChange={submitEvent}/>
                           <input type="password" name="conpassword" id="" value={data.conpassword}  placeholder="Confirm Password :" onChange={submitEvent}/>
                            <input type="submit" className="btn" value="Register" onClick={login}/>
                          </form>
                      
                 </div>
                 <div className="right">
                       <img src={logo} alt="" />
                 </div>
             </div>
             </div>
        </>
    );
}
export default Signup;