import React from "react";
import  "./Home.css";
import MyImage from './Assests/shree.png'
export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-box">
          <div className="home-box2">
            <span className="h">
              <b>H</b>
            </span>
            <span className="e">
              <b>E</b>
            </span>
            <span className="l">
              <b>L</b>
            </span>
            <span className="l">
              <b>L</b>
            </span>
            <span className="o">
              <b>O</b>
            </span>
            <span>
              <b>,</b>
            </span>
          </div>
          <br />
          <h3>Shree Krishna Kumar Prajapati</h3>
          <h4>React Developer <span style={{color:"white"}}>|</span> Artist <span style={{color:"white"}}>|</span> Teacher</h4>
          <br />
          <p>"Coding takes time. A line has time in it"</p>
        </div>
        <div  id="none" className="home-box">
          <div className="image">
            <img src={MyImage} alt="hghhjhjg" />
          </div>
        </div>
      </div>
    </div>
  );
}
