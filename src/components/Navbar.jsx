import React, {useState} from 'react';
import { NavLink } from 'react-router-dom'
import "../css/navbar.css";
 

 
const Navbar = () => {
  return (
    <nav> 
      <div className="logo">  
         <img src="../img/Logo(1).svg"  ></img>
      </div>
      <div className="navbar"> 
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/" ><h2>HOME</h2></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/todo" ><h2>ABOUT US</h2></NavLink>
        <NavLink  className={(e)=>{return e.isActive?"red":""}}to= "/testimonial" ><h2>CONTACT</h2></NavLink>
        </div>
        
        </nav>
  )
}
 

 

export default Navbar;
