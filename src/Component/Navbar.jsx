import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
     
        <div class="nav">
          <div class="boxportfolio">
              <h3>Portfolio</h3>
          </div>
          <div class="box">
              <div class="box-info">
                  <a href="./index.html"><Link to="/">Home</Link></a>
                  <a href="./about.html"><Link to="/about">About</Link></a>
                  <a href="./skills.html"><Link to="/skill">Skills</Link></a>
                  {/* <a href="./skills.html"><Link to="/service">Services</Link></a> */}
                  <a href="./contact.html"><Link to="/contact">Contact</Link></a>
              </div>
          </div>
        </div>
        <hr />
        
      </div>
   
  );
}
