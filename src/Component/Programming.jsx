import React, { useState } from "react";
import "./Programming.css";
import Image from "./Assests/programming.png";
import Cprogram from "./Cprogram";
import Java from "./Java";
import Python from "./Python";
import ReactJs from "./ReactJs";
import Angular from "./Angular";
import HtmlSkill from "./HtmlSkill";
import Stylecss from "./Stylecss";
import JavaScript from "./JavaScript";
export default function Programming() {
  const [sucess, setSucess] = useState("95");
  let UnChanged = (e) => {
    setSucess(e.target.value);
  };
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>My Programming Skills</h1>
      <br />
      <div className="programming">
        <div className="programming-img">
          <img src={Image} alt="" />
        </div>
        <div className="programming-text">
          <div>
            <select name="" id="" onChange={UnChanged}>
              <option value="0">Select</option>
              <option value="35">Java</option>
              <option value="40">Python</option>
              <option value="34">C Programming</option>
              <option value="75">HTML</option>
              <option value="70">CSS</option>
              <option value="50">JavaScript</option>
              <option value="60">React</option>
              <option value="51">Angular</option>
            </select>
            <meter min="0" max="100" value={sucess}></meter>
            <h1>{sucess}%</h1>
          </div>
        </div>
      </div>
      <div className="programmingskill">
        
        <div className={sucess==="34" ? "program": "nonprogram"}>
          <Cprogram/>
        </div>
        <div className={sucess==="35" ? "program": "nonprogram"}>
          <Java/>
        </div>
        <div className={sucess==="40" ? "program": "nonprogram"}>
          <Python/>
        </div >
        <div className={sucess==="60" ? "program": "nonprogram"}>
          <ReactJs/>
        </div >
        <div className={sucess==="51" ? "program": "nonprogram"}>
          <Angular/>
        </div >
        <div className={sucess==="75" ? "program": "nonprogram"}>
          <HtmlSkill/>
        </div >
        <div className={sucess==="70" ? "program": "nonprogram"}>
          <Stylecss/>
        </div >
        <div className={sucess==="50" ? "program": "nonprogram"}>
          <JavaScript/>
        </div >
            
      </div>
    </div>
  );
}
